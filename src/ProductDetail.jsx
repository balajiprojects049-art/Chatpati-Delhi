import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addToCart } from './utils/cart';
import { menuItems as allMenuItems } from './data/menuData';
import './index.css';
import './enhanced-styles.css';

// Rich data with detailed descriptions for specific items
const richProductData = [
    {
        id: 1,
        fullDescription: 'Experience the authentic taste of Delhi with our handcrafted Bhara Samosas. Each samosa features a perfectly crispy, golden-brown exterior made from refined flour, encasing a flavorful filling of seasoned potatoes, green peas, and aromatic Indian spices.',
        ingredients: ['Refined Flour (Maida)', 'Potatoes', 'Green Peas', 'Cumin Seeds', 'Coriander Powder', 'Garam Masala', 'Green Chilies', 'Ginger', 'Vegetable Oil'],
        features: ['✓ Freshly made daily', '✓ Crispy & flaky texture', '✓ Authentic Delhi recipe', '✓ Served with mint & tamarind chutney', '✓ Perfect tea-time snack'],
        prepTime: '15 mins',
        rating: 4.8,
        reviews: 142,
        vegetarian: true
    },
    {
        id: 2,
        fullDescription: 'Indulge in our crispy Khasta Kachoris, a beloved Delhi street food delicacy. These perfectly round, puffed pastries are filled with a savory mixture of spiced lentils and aromatic spices, creating an explosion of flavors in every bite.',
        ingredients: ['Refined Flour', 'Moong Dal (Yellow Lentils)', 'Fennel Seeds', 'Black Pepper', 'Asafoetida (Hing)', 'Red Chili Powder', 'Turmeric', 'Coriander Powder', 'Ghee'],
        features: ['✓ Extra crispy & flaky', '✓ Traditional Delhi recipe', '✓ Protein-rich lentil filling', '✓ Best with aloo sabzi', '✓ No artificial preservatives'],
        prepTime: '20 mins',
        rating: 4.6,
        reviews: 98,
        vegetarian: true
    },
    {
        id: 3,
        fullDescription: 'A royal treat from Jaipur brought to Delhi! Our Pyaaz Kachoris feature a crispy, flaky crust filled with caramelized onions seasoned with traditional Rajasthani spices. Each bite offers a perfect balance of sweet and savory flavors.',
        ingredients: ['All-Purpose Flour', 'Onions', 'Fennel Seeds', 'Nigella Seeds (Kalonji)', 'Red Chili Powder', 'Turmeric', 'Coriander Powder', 'Ghee'],
        features: ['✓ Jaipur authentic recipe', '✓ Sweet & savory flavor', '✓ Caramelized onions', '✓ Aromatic spice blend', '✓ Pairs well with sweet chutney'],
        prepTime: '25 mins',
        rating: 4.7,
        reviews: 87,
        vegetarian: true
    },
    {
        id: 4,
        fullDescription: 'Transport yourself to the streets of Old Delhi with our authentic Dahi Bhalle. Soft, melt-in-mouth lentil fritters soaked in creamy, sweetened yogurt and topped with tangy tamarind chutney, mint sauce, and aromatic spices.',
        ingredients: ['Urad Dal (Black Gram)', 'Fresh Yogurt', 'Tamarind', 'Green Chutney', 'Cumin Powder', 'Red Chili Powder', 'Black Salt', 'Sugar', 'Fresh Coriander'],
        features: ['✓ Famous Chandni Chowk style', '✓ Soft & fluffy bhallas', '✓ Homemade yogurt', '✓ Perfect balance of sweet & tangy', '✓ Cooling & refreshing'],
        prepTime: '10 mins',
        rating: 4.9,
        reviews: 203,
        vegetarian: true
    },
    {
        id: 5,
        fullDescription: 'A light and crunchy street food favorite! Our Churmuri Bhel combines puffed rice with fresh vegetables, roasted peanuts, and a medley of tangy and spicy chutneys, creating a perfect harmony of textures and flavors.',
        ingredients: ['Puffed Rice', 'Onions', 'Tomatoes', 'Cucumber', 'Roasted Peanuts', 'Sev', 'Tamarind Chutney', 'Green Chutney', 'Lemon Juice', 'Chaat Masala'],
        features: ['✓ Low-calorie snack', '✓ Fresh vegetables', '✓ Crunchy texture', '✓ Tangy & spicy', '✓ Instant energy booster'],
        prepTime: '5 mins',
        rating: 4.5,
        reviews: 76,
        vegetarian: true
    },
    {
        id: 6,
        fullDescription: 'The most iconic Delhi street food! Our Golgappe (Pani Puri) feature ultra-crispy semolina shells filled with spiced mashed potatoes and chickpeas, then dunked in tangy-spicy tamarind water. An explosion of flavors in every bite!',
        ingredients: ['Semolina (Suji)', 'Potatoes', 'Chickpeas', 'Tamarind', 'Black Salt', 'Cumin Powder', 'Mint Leaves', 'Green Chilies', 'Coriander', 'Chaat Masala'],
        features: ['✓ Freshly made crispy puris', '✓ Two flavored waters (sweet & spicy)', '✓ Authentic Delhi taste', '✓ Made-to-order freshness', '✓ Most popular street food'],
        prepTime: '8 mins',
        rating: 4.9,
        reviews: 312,
        vegetarian: true
    },
    {
        id: 7,
        fullDescription: 'A delightful combination platter! Enjoy both Sev Puri (crispy puris topped with potatoes, onions, chutneys, and sev) and Dahi Puri (puris filled with yogurt, tamarind chutney, and spices) in one serving.',
        ingredients: ['Wheat Flour Puris', 'Potatoes', 'Yogurt', 'Onions', 'Tomatoes', 'Sev (Crispy Chickpea Noodles)', 'Tamarind Chutney', 'Mint Chutney', 'Pomegranate'],
        features: ['✓ Best of both worlds', '✓ Sweet, tangy & spicy', '✓ Crunchy & creamy textures', '✓ Fresh toppings', '✓ Mumbai-Delhi fusion'],
        prepTime: '10 mins',
        rating: 4.7,
        reviews: 156,
        vegetarian: true
    },
    {
        id: 8,
        fullDescription: 'A classic Delhi chaat! Crispy wheat crackers (papri) topped with boiled potatoes, chickpeas, yogurt, and a symphony of sweet and spicy chutneys, garnished with fresh coriander and sev.',
        ingredients: ['Wheat Crackers (Papri)', 'Potatoes', 'Chickpeas', 'Yogurt', 'Tamarind Chutney', 'Green Chutney', 'Sev', 'Chaat Masala', 'Red Chili Powder', 'Coriander'],
        features: ['✓ Multi-layered flavors', '✓ Sweet & tangy taste', '✓ Crunchy & soft textures', '✓ Protein from chickpeas', '✓ Street food favorite'],
        prepTime: '8 mins',
        rating: 4.6,
        reviews: 134,
        vegetarian: true
    },
    {
        id: 9,
        fullDescription: 'Crispy-on-the-outside, soft-on-the-inside potato tikkis topped with cool yogurt, tangy tamarind chutney, spicy green chutney, and garnished with pomegranate seeds and fresh coriander.',
        ingredients: ['Potatoes', 'Bread Crumbs', 'Corn Flour', 'Yogurt', 'Tamarind Chutney', 'Mint Chutney', 'Chaat Masala', 'Pomegranate Seeds', 'Coriander'],
        features: ['✓ Crispy shallow-fried tikki', '✓ Cool & refreshing yogurt', '✓ Balance of temperatures', '✓ Healthy potato base', '✓ Perfect evening snack'],
        prepTime: '12 mins',
        rating: 4.8,
        reviews: 189,
        vegetarian: true
    },
    {
        id: 10,
        fullDescription: 'The king of all kachoris! A large, crispy kachori bowl filled with moong dal, potatoes, chickpeas, yogurt, and topped with an array of chutneys, sev, and spices. A complete meal in itself!',
        ingredients: ['Refined Flour', 'Moong Dal', 'Potatoes', 'Chickpeas', 'Yogurt', 'Tamarind Chutney', 'Green Chutney', 'Sev', 'Pomegranate', 'Spices'],
        features: ['✓ Extra large serving', '✓ Complete meal', '✓ 5 flavor profiles', '✓ Instagram-worthy presentation', '✓ Most filling chaat'],
        prepTime: '15 mins',
        rating: 4.9,
        reviews: 267,
        vegetarian: true
    },
    {
        id: 11,
        fullDescription: 'A hearty combination of crispy potato tikkis served with spicy chickpea curry, topped with yogurt, chutneys, onions, and a sprinkle of aromatic spices.',
        ingredients: ['Potatoes', 'Chickpeas', 'Onions', 'Tomatoes', 'Yogurt', 'Garam Masala', 'Coriander Powder', 'Tamarind Chutney', 'Green Chutney', 'Chaat Masala'],
        features: ['✓ High protein content', '✓ Filling & satisfying', '✓ Spicy chickpea curry', '✓ Crispy tikki base', '✓ Complete nutrition'],
        prepTime: '18 mins',
        rating: 4.7,
        reviews: 145,
        vegetarian: true
    },
    {
        id: 12,
        fullDescription: 'The ultimate comfort food! Crispy samosas broken and topped with spicy chickpea curry, yogurt, tamarind and mint chutneys, creating a delicious medley of textures and flavors.',
        ingredients: ['Samosas', 'Chickpeas', 'Yogurt', 'Tamarind Chutney', 'Green Chutney', 'Onions', 'Sev', 'Chaat Masala', 'Coriander', 'Pomegranate'],
        features: ['✓ Two favorites in one', '✓ Extra spicy option', '✓ Generous portion', '✓ Perfect for sharing', '✓ Ultimate comfort food'],
        prepTime: '12 mins',
        rating: 4.8,
        reviews: 198,
        vegetarian: true
    },
    {
        id: 13,
        fullDescription: 'Crispy vegetable fritters made with fresh seasonal vegetables dipped in spiced chickpea flour batter and deep-fried to golden perfection. Perfect with chai!',
        ingredients: ['Chickpea Flour (Besan)', 'Potatoes', 'Onions', 'Spinach', 'Cauliflower', 'Green Chilies', 'Ginger', 'Carom Seeds (Ajwain)', 'Turmeric', 'Red Chili Powder'],
        features: ['✓ Assorted vegetables', '✓ Crispy & golden', '✓ Perfect rainy day snack', '✓ Best with tea/coffee', '✓ Served hot & fresh'],
        prepTime: '15 mins',
        rating: 4.5,
        reviews: 112,
        vegetarian: true
    },
    {
        id: 14,
        fullDescription: 'Premium cottage cheese slices sandwiched with spicy mint chutney, coated in seasoned chickpea batter, and deep-fried until crispy. An elevated version of traditional pakoras!',
        ingredients: ['Fresh Paneer', 'Chickpea Flour', 'Mint Chutney', 'Coriander Chutney', 'Green Chilies', 'Ginger-Garlic Paste', 'Carom Seeds', 'Red Chili Powder', 'Salt'],
        features: ['✓ Premium paneer quality', '✓ Mint chutney stuffing', '✓ Extra protein', '✓ Crispy coating', '✓ Restaurant-style'],
        prepTime: '20 mins',
        rating: 4.7,
        reviews: 167,
        vegetarian: true
    },
    {
        id: 16,
        fullDescription: 'Our signature curly fries are seasoned with a special blend of chatpati spices! Crispy on the outside, fluffy on the inside, and spiraled for maximum fun. Served with a side of creamy dip.',
        ingredients: ['Potatoes', 'Corn Starch', 'Rice Flour', 'Paprika', 'Garlic Powder', 'Onion Powder', 'Black Pepper', 'Salt', 'Vegetable Oil'],
        features: ['✓ Fun spiral shape', '✓ Extra crispy coating', '✓ Chatpati spice blend', '✓ Kids favorite', '✓ Perfect side dish'],
        prepTime: '12 mins',
        rating: 4.6,
        reviews: 210,
        vegetarian: true
    },
    {
        id: 17,
        fullDescription: 'The quintessential Mumbai street snack! Flat crispy puris loaded with diced potatoes, onions, and three types of chutneys (tamarind, chili, garlic), topped strictly with mountains of nylon sev.',
        ingredients: ['Flat Puris (Papdi)', 'Boiled Potatoes', 'Onions', 'Nylon Sev', 'Tamarind Chutney', 'Garlic Chutney', 'Green Chili Chutney', 'Raw Mango (Seasonal)', 'Coriander'],
        features: ['✓ Authentic Mumbai recipe', '✓ Heavy on Sev', '✓ Triple chutney flavor', '✓ Crunchy & spicy', '✓ Freshly assembled'],
        prepTime: '8 mins',
        rating: 4.8,
        reviews: 320,
        vegetarian: true
    },
    {
        id: 18,
        fullDescription: 'An edible art piece! A crispy, basket-shaped katori made from grated potatoes, filled with sprouts, pomegranate, yogurt, chutneys, and spices. Looks amazing, tastes even better.',
        ingredients: ['Grated Potatoes', 'Bean Sprouts', 'Chickpeas', 'Yogurt', 'Tamarind Chutney', 'Mint Chutney', 'Pomegranate Arils', 'Sev', 'Chaat Masala'],
        features: ['✓ Unique basket presentation', '✓ Crunchy potato nest', '✓ Fresh & healthy fillings', '✓ Perfect appetizer', '✓ Instagram favorite'],
        prepTime: '15 mins',
        rating: 4.9,
        reviews: 289,
        vegetarian: true
    },
    {
        id: 20,
        fullDescription: 'A popular fasting snack from Maharashtra! Crispy deep-fried fritters made from soaked tapioca pearls (sabudana), mashed potatoes, and crushed peanuts. Served with sweetened curd or green chutney.',
        ingredients: ['Sabudana (Tapioca Pearls)', 'Potatoes', 'Roasted Peanuts', 'Green Chilies', 'Cumin Seeds', 'Coriander Leaves', 'Lemon Juice', 'Sugar', 'Salt'],
        features: ['✓ Traditional fasting food', '✓ Crispy outside, soft inside', '✓ Peanut crunch', '✓ Gluten-free option', '✓ Served with chutney'],
        prepTime: '12 mins',
        rating: 4.7,
        reviews: 156,
        vegetarian: true
    },
    {
        id: 21,
        fullDescription: 'A classic Indian street burger! A crispy samosa tucked inside a soft bun, slathered with spicy green chutney and sweet tamarind chutney. A perfect on-the-go snack.',
        ingredients: ['Bun', 'Samosa', 'Green Chutney', 'Tamarind Chutney', 'Butter', 'Red Chili Powder'],
        features: ['✓ Portable snack', '✓ Iconic fusion', '✓ Sweet & spicy', '✓ Freshly baked bun', '✓ Filling snack'],
        prepTime: '5 mins',
        rating: 4.5,
        reviews: 89,
        vegetarian: true
    },
    {
        id: 22,
        fullDescription: 'Famous from Karjat station! A spicy, deep-fried potato dumpling (vada) served in a pav (bread roll) with a generous amount of garlic chutney and fried green chili. The true taste of Maharashtra.',
        ingredients: ['Pav', 'Potatoes', 'Chickpea Flour (Besan)', 'Garlic Chutney', 'Green Chilies', 'Mustard Seeds', 'Curry Leaves', 'Turmeric'],
        features: ['✓ Authentic Karjat style', '✓ Spicy garlic chutney', '✓ Freshly fried vada', '✓ Mumbai staple', '✓ High energy food'],
        prepTime: '8 mins',
        rating: 4.8,
        reviews: 210,
        vegetarian: true
    },
    {
        id: 23,
        fullDescription: 'A cheesy twist on the classic Vada Pav! Our spicy potato vada is topped with a slice of cheese and melted butter, served in a soft pav with chutneys. A favorite among cheese lovers.',
        ingredients: ['Pav', 'Potato Vada', 'Cheese Slice', 'Butter', 'Garlic Chutney', 'Green Chutney', 'Fried Green Chili'],
        features: ['✓ Cheesy goodness', '✓ Fusion street food', '✓ Melted butter', '✓ Spicy & creamy', '✓ Kids favorite'],
        prepTime: '8 mins',
        rating: 4.7,
        reviews: 156,
        vegetarian: true
    },
    {
        id: 24,
        fullDescription: 'A sweet, spicy, and tangy potato burger from Kutch (Gujarat). A soft bun filled with a special dabeli masala potato mix, topped with pomegranate, roasted peanuts, and fine sev.',
        ingredients: ['Bun', 'Boiled Potatoes', 'Dabeli Masala', 'Tamarind Chutney', 'Pomegranate', 'Roasted Peanuts', 'Nylon Sev', 'Butter'],
        features: ['✓ Unique masala blend', '✓ Sweet & spicy', '✓ Crunchy peanuts', '✓ Authentic Kutchi taste', '✓ Soft buttery bun'],
        prepTime: '10 mins',
        rating: 4.6,
        reviews: 134,
        vegetarian: true
    },
    {
        id: 25,
        fullDescription: 'Spicy, buttery, and absolutely delicious! A thick vegetable curry (bhaji) cooked with a special blend of spices, served with butter-toasted pavs, chopped onions, and lemon wedges.',
        ingredients: ['Potatoes', 'Cauliflower', 'Peas', 'Carrots', 'Pav Bhaji Masala', 'Butter', 'Pav', 'Onions', 'Lemon', 'Coriander'],
        features: ['✓ Mixed vegetable goodness', '✓ Rich buttery taste', '✓ Spicy masala', '✓ Complete meal', '✓ Mumbai classic'],
        prepTime: '15 mins',
        rating: 4.9,
        reviews: 345,
        vegetarian: true
    },
    {
        id: 26,
        fullDescription: 'Our famous Pav Bhaji loaded with generous amounts of Amul cheese! The cheese melts into the hot, spicy bhaji, creating a creamy and rich flavor profile that is hard to resist.',
        ingredients: ['Pav', 'Mixed Vegetable Bhaji', 'Amul Cheese', 'Butter', 'Onions', 'Lemon', 'Coriander'],
        features: ['✓ Loaded with Amul Cheese', '✓ Extra creamy', '✓ Rich flavor', '✓ Kids favorite', '✓ Spicy & cheesy'],
        prepTime: '15 mins',
        rating: 4.9,
        reviews: 278,
        vegetarian: true
    },
    {
        id: 27,
        fullDescription: 'A spicy and savory delight for non-veg lovers! Minced chicken cooked with aromatic spices, onions, and tomatoes, served with buttered pav. A hearty and satisfying meal.',
        ingredients: ['Minced Chicken (Keema)', 'Onions', 'Tomatoes', 'Ginger-Garlic Paste', 'Garam Masala', 'Pav', 'Butter', 'Coriander', 'Green Chilies'],
        features: ['✓ Spicy chicken keema', '✓ Protein rich', '✓ Authentic spices', '✓ Soft buttered pav', '✓ Filling meal'],
        prepTime: '18 mins',
        rating: 4.8,
        reviews: 198,
        vegetarian: false
    },
    {
        id: 28,
        fullDescription: 'A vegetarian take on the classic meat dish! Soya granules or minced vegetables cooked in a spicy, flavorful gravy, served with soft pavs. You won\'t believe it\'s not meat!',
        ingredients: ['Soya Granules/Minced Veggies', 'Onions', 'Tomatoes', 'Keema Masala', 'Pav', 'Butter', 'Peas', 'Coriander'],
        features: ['✓ 100% Vegetarian', '✓ High protein soya', '✓ Meat-like texture', '✓ Spicy gravy', '✓ Healthy alternative'],
        prepTime: '15 mins',
        rating: 4.6,
        reviews: 145,
        vegetarian: true
    },
    {
        id: 29,
        fullDescription: 'A fiery Maharashtrian curry made from moth beans (matki), topped with farsan (crispy mix), chopped onions, and coriander. Served with pav and a slice of lemon for an extra kick.',
        ingredients: ['Moth Beans (Matki)', 'Farsan/Sev', 'Onions', 'Tomatoes', 'Missal Masala', 'Pav', 'Lemon', 'Coriander', 'Oil', 'Mustard Seeds'],
        features: ['✓ Authentic Kolhapuri spice', '✓ High protein beans', '✓ Crunchy topping', '✓ Spicy curry', '✓ Traditional breakfast'],
        prepTime: '15 mins',
        rating: 4.7,
        reviews: 234,
        vegetarian: true
    },
    {
        id: 30,
        fullDescription: 'A desi-style burger that hits all the right spots! A crispy vegetable patty made from potatoes, peas, and carrots, topped with a slice of cheese, fresh lettuce, tomatoes, and our special burger sauce.',
        ingredients: ['Burger Bun', 'Potato & Veg Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Mayonnaise', 'Ketchup', 'Burger Sauce'],
        features: ['✓ Homemade veg patty', '✓ Cheesy delight', '✓ Fresh veggies', '✓ Special sauce', '✓ Kids favorite'],
        prepTime: '12 mins',
        rating: 4.5,
        reviews: 112,
        vegetarian: true
    },
    {
        id: 31,
        fullDescription: 'A traditional North Indian breakfast! Spicy potato curry (aloo subji) served with crispy, flaky khasta kachoris. The combination of the spicy curry and the crunchy kachori is heavenly.',
        ingredients: ['Khasta Kachori', 'Potatoes', 'Tomatoes', 'Green Chilies', 'Ginger', 'Cumin Seeds', 'Asafoetida', 'Turmeric', 'Coriander'],
        features: ['✓ Classic breakfast combo', '✓ Spicy potato curry', '✓ Flaky kachori', '✓ Authentic taste', '✓ Filling meal'],
        prepTime: '10 mins',
        rating: 4.7,
        reviews: 145,
        vegetarian: true
    },
    {
        id: 32,
        fullDescription: 'The ultimate Punjabi feast! Large, fluffy fried bread (bhature) served with spicy, tangy chickpea curry (chole), pickled onions, and green chilies. A meal that signifies celebration.',
        ingredients: ['Refined Flour (Maida)', 'Chickpeas (Kabuli Chana)', 'Onions', 'Tomatoes', 'Ginger-Garlic Paste', 'Chole Masala', 'Tea Leaves (for color)', 'Yogurt'],
        features: ['✓ Authentic Punjabi recipe', '✓ Large fluffy bhature', '✓ Spicy & tangy chole', '✓ Served with pickle', '✓ Heavy & satisfying'],
        prepTime: '20 mins',
        rating: 4.9,
        reviews: 356,
        vegetarian: true
    },
    {
        id: 33,
        fullDescription: 'A popular street food from Agra and Mathura! Crispy, coarse wheat flour puris stuffed with spiced lentil paste, served with a spicy potato curry. A rustic and flavorful meal.',
        ingredients: ['Wheat Flour', 'Urad Dal Paste', 'Potatoes', 'Tomatoes', 'Fennel Seeds', 'Coriander Powder', 'Red Chili Powder', 'Amchur (Dry Mango Powder)'],
        features: ['✓ Rustic flavors', '✓ Stuffed puris', '✓ Spicy aloo sabzi', '✓ Mathura style', '✓ Crispy texture'],
        prepTime: '15 mins',
        rating: 4.6,
        reviews: 123,
        vegetarian: true
    },
    {
        id: 34,
        fullDescription: 'A delicious vegetarian wrap! Spiced soya granules or minced vegetables cooked to perfection and wrapped in a soft, thin roomali roti with onions and mint sauce.',
        ingredients: ['Roomali Roti', 'Soya Granules/Minced Veggies', 'Onions', 'Mint Chutney', 'Chaat Masala', 'Lemon Juice'],
        features: ['✓ Thin & soft roti', '✓ Healthy filling', '✓ Perfect for lunch', '✓ Easy to eat', '✓ Vegetarian delight'],
        prepTime: '12 mins',
        rating: 4.5,
        reviews: 98,
        vegetarian: true
    },
    {
        id: 35,
        fullDescription: 'A winter classic from Punjab! Nutritious mustard greens (sarson ka saag) cooked with spices and served with rustic cornflour flatbread (makki ki roti) and a dollop of white butter.',
        ingredients: ['Mustard Greens (Sarson)', 'Spinach', 'Corn Flour (Makka)', 'Ginger', 'Garlic', 'Green Chilies', 'Ghee/Butter', 'Jaggery'],
        features: ['✓ Winter special', '✓ Highly nutritious', '✓ Authentic Punjabi taste', '✓ Gluten-free bread', '✓ Rich in iron'],
        prepTime: '25 mins',
        rating: 4.8,
        reviews: 210,
        vegetarian: true
    },
    {
        id: 36,
        fullDescription: 'A non-veg lover’s dream! Spicy minced chicken (keema) wrapped in a delicate, handkerchief-thin roomali roti with crunchy onions and tangy chutney.',
        ingredients: ['Roomali Roti', 'Minced Chicken', 'Onions', 'Ginger-Garlic Paste', 'Green Chilies', 'Garam Masala', 'Mint Chutney', 'Egg (optional coating)'],
        features: ['✓ Soft roomali roti', '✓ Spicy chicken filling', '✓ Juicy & flavorful', '✓ Perfect roll', '✓ High protein'],
        prepTime: '15 mins',
        rating: 4.7,
        reviews: 167,
        vegetarian: false
    },
    {
        id: 37,
        fullDescription: 'Our signature Tandoori Chicken! Marinated in yoghurt and spices for 24 hours, tied with a string (sutli) to hold its juices, and slow-cooked in a clay oven (tandoor). Juicy, smoky, and absolutely delicious.',
        ingredients: ['Whole Chicken', 'Yoghurt', 'Ginger-Garlic Paste', 'Lemon Juice', 'Kashmiri Red Chili', 'Garam Masala', 'Mustard Oil', 'Kasuri Methi'],
        features: ['✓ Signature dish', '✓ Slow-cooked in Tandoor', '✓ Smoky flavor', '✓ Juicy & tender', '✓ Authentic marinade'],
        prepTime: '25 mins',
        rating: 4.9,
        reviews: 412,
        vegetarian: false
    },
    {
        id: 38,
        fullDescription: 'Succulent chicken pieces marinated in a spicy mix of roasted spices and yoghurt, then grilled to perfection. The \'Barrah\' style preparation gives it a robust and smoky flavor.',
        ingredients: ['Chicken Pieces', 'Hung Curd', 'Barrah Masala', 'Black Pepper', 'Clove', 'Cardamom', 'Lemon', 'Ghee'],
        features: ['✓ Spicy & robust', '✓ Smoky aroma', '✓ Tender meat', '✓ Perfect appetizer', '✓ Best with mint chutney'],
        prepTime: '20 mins',
        rating: 4.7,
        reviews: 231,
        vegetarian: false
    },
    {
        id: 39,
        fullDescription: 'A milder, creamy version of the classic chicken tikka. Boneless chicken chunks marinated in cream (malai), cheese, cashew paste, and mild spices. Delicately grilled to melt in your mouth.',
        ingredients: ['Boneless Chicken', 'Fresh Cream', 'Cheese', 'Cashew Paste', 'White Pepper', 'Cardamom Powder', 'Ghee'],
        features: ['✓ Creamy & mild', '✓ Melt-in-mouth texture', '✓ Kid-friendly', '✓ Rich cashew marinade', '✓ Cheesy flavor'],
        prepTime: '20 mins',
        rating: 4.8,
        reviews: 345,
        vegetarian: false
    },
    {
        id: 40,
        fullDescription: 'For those who like it hot and tangy! Boneless chicken marinated in a special \'Chatpati\' spice blend including raw mango powder, chili, and lemon. Grilled to a charred perfection.',
        ingredients: ['Boneless Chicken', 'Chatpati Masala', 'Amchur (Dry Mango)', 'Red Chili Paste', 'Lemon Juice', 'Yoghurt', 'Ginger-Garlic'],
        features: ['✓ Spicy & tangy', '✓ Chatpati flavors', '✓ Char-grilled', '✓ Zesty kick', '✓ Perfect with drinks'],
        prepTime: '20 mins',
        rating: 4.7,
        reviews: 189,
        vegetarian: false
    },
    {
        id: 41,
        fullDescription: 'A delightful sizzler platter featuring crispy vegetable cutlets served on a bed of rice or noodles, with stir-fried vegetables and savory sauce. Served sizzling hot!',
        ingredients: ['Veg Cutlets', 'Rice/Noodles', 'Mixed Vegetables (Carrot, Beans, Capsicum)', 'Sizzler Sauce', 'French Fries', 'Butter'],
        features: ['✓ Served sizzling hot', '✓ Complete meal', '✓ Crispy cutlets', '✓ Fresh veggies', '✓ Dramatic presentation'],
        prepTime: '25 mins',
        rating: 4.6,
        reviews: 156,
        vegetarian: true
    },
    {
        id: 42,
        fullDescription: 'Paneer like never before! Large cubes of paneer marinated in \'Bhatti\' spices and grilled, served sizzling with onions, capsicum, and a spicy gravy.',
        ingredients: ['Paneer (Cottage Cheese)', 'Bhatti Masala', 'Onions', 'Capsicum', 'Sizzler Gravy', 'Butter', 'Lemon'],
        features: ['✓ Smoky grilled paneer', '✓ Spicy Bhatti masala', '✓ Sizzling platter', '✓ High protein veg', '✓ Exotic flavors'],
        prepTime: '25 mins',
        rating: 4.8,
        reviews: 267,
        vegetarian: true
    },
    {
        id: 43,
        fullDescription: 'Delicious Soya Chaap marinated in tandoori spices, grilled and served sizzling with grilled onions and mint sauce. A vegetarian delight with a meaty texture.',
        ingredients: ['Soya Chaap', 'Tandoori Masala', 'Yoghurt', 'Butter', 'Onions', 'Capsicum', 'Lemon', 'Sizzler Sauce'],
        features: ['✓ Meat substitute', '✓ High protein', '✓ Tandoori flavor', '✓ Juicy & chewy', '✓ Sizzling hot'],
        prepTime: '20 mins',
        rating: 4.7,
        reviews: 198,
        vegetarian: true
    },
    {
        id: 44,
        fullDescription: 'The ultimate platter for chicken lovers! An assortment of Malai Tikka, Haryali Tikka, and Classic Chicken Tikka served on a sizzling plate with dip and salad.',
        ingredients: ['Chicken Malai Tikka', 'Chicken Haryali Tikka', 'Chicken Tikka', 'Mint Chutney', 'Salad', 'Butter'],
        features: ['✓ Assorted tikkas', '✓ 3 flavors in 1', '✓ Shareable platter', '✓ Best seller', '✓ Sizzling presentation'],
        prepTime: '30 mins',
        rating: 4.9,
        reviews: 450,
        vegetarian: false
    },
    {
        id: 45,
        fullDescription: 'Premium lamb chops marinated in a secret spice blend and grilled to juicy perfection. Served sizzling with grilled vegetables and a mint-yogurt dip. A royal feast!',
        ingredients: ['Lamb Chops', 'Secret Spice Blend', 'Yoghurt', 'Raw Papaya (tenderizer)', 'Ginger-Garlic', 'Ghee', 'Grilled Veggies'],
        features: ['✓ Premium lamb cuts', '✓ Juicy & tender', '✓ Royal delicacy', '✓ Exquisite flavors', '✓ Special occasion dish'],
        prepTime: '35 mins',
        rating: 4.9,
        reviews: 180,
        vegetarian: false
    },
    {
        id: 46,
        fullDescription: 'Crispy, golden-fried fish fillets marinated in traditional Amritsari spices and chickpea flour. A light and flavorful appetizer that melts in your mouth.',
        ingredients: ['Fish Fillets', 'Chickpea Flour (Besan)', 'Carom Seeds (Ajwain)', 'Ginger-Garlic Paste', 'Lemon Juice', 'Red Chili Powder', 'Turmeric', 'Egg'],
        features: ['✓ Amritsari specialty', '✓ Light & crispy batter', '✓ Ajwain flavor', '✓ Fresh fish', '✓ Perfect snack'],
        prepTime: '15 mins',
        rating: 4.8,
        reviews: 189,
        vegetarian: false
    },
    {
        id: 47,
        fullDescription: 'A royal feast for vegetarians! Fragrant basmati rice layered with a rich medley of seasonal vegetables cooked in aromatic spices and saffron-infused milk. Served with raita and salan.',
        ingredients: ['Basmati Rice', 'Cauliflower', 'Carrots', 'Beans', 'Peas', 'Potatoes', 'Saffron', 'Biryani Masala', 'Fried Onions (Barista)', 'Ghee'],
        features: ['✓ Authentic Dum cooking', '✓ Fresh seasonal veggies', '✓ Saffron aroma', '✓ Served with Raita', '✓ Complete meal'],
        prepTime: '20 mins',
        rating: 4.7,
        reviews: 210,
        vegetarian: true
    },
    {
        id: 48,
        fullDescription: 'Orignating from the streets of Old Delhi! Tender chicken pieces marinated in yoghurt and spices, layered with long-grain basmati rice and slow-cooked in a sealed pot (dum) to lock in the flavors.',
        ingredients: ['Basmati Rice', 'Chicken Pieces', 'Yoghurt', 'Saffron', 'Kewra Water', 'Rose Water', 'Ghee', 'Whole Spices', 'Fried Onions'],
        features: ['✓ Purani Delhi style', '✓ Dum Pukht cooking', '✓ Rich & aromatic', '✓ Tender chicken', '✓ Classic recipe'],
        prepTime: '25 mins',
        rating: 4.9,
        reviews: 450,
        vegetarian: false
    },
    {
        id: 49,
        fullDescription: 'A delicacy for meat connoisseurs! Succulent pieces of goat meat cooked with aromatic spices and layered with premium basmati rice. Slow-cooked to perfection for an unforgettable taste experience.',
        ingredients: ['Basmati Rice', 'Goat Meat', 'Yoghurt', 'Saffron', 'Mint Leaves', 'Coriander', 'Garam Masala', 'Ghee', 'Ginger-Garlic'],
        features: ['✓ Premium goat meat', '✓ Traditional Dum style', '✓ Exquisite aroma', '✓ Rich flavors', '✓ Special occasion dish'],
        prepTime: '30 mins',
        rating: 4.8,
        reviews: 320,
        vegetarian: false
    }
];

function ProductDetail() {
    const { id } = useParams();
    const basicProduct = allMenuItems.find(item => item.id === parseInt(id));
    const richInfo = richProductData.find(item => item.id === parseInt(id));

    // Merge data, defaulting to basic info if rich info is missing
    const product = basicProduct ? {
        ...basicProduct,
        ...(richInfo || {}),
        rating: richInfo?.rating || 4.5,
        reviews: richInfo?.reviews || '50+',
        features: richInfo?.features || ['✓ Authentic Taste', '✓ Fresh Ingredients', '✓ Served Hot'],
        ingredients: richInfo?.ingredients || [],
        prepTime: richInfo?.prepTime || '15 mins',
        fullDescription: richInfo?.fullDescription || basicProduct.description
    } : null;

    // State management
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);
    const [showNotification, setShowNotification] = useState(false);
    const [spiceLevel, setSpiceLevel] = useState('medium');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="product-not-found">
                <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2>Product not found</h2>
                    <Link to="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Related products (same category)
    const relatedProducts = allMenuItems
        .filter(item => item.category === product.category && item.id !== product.id)
        .slice(0, 4);

    // Product images (for demo, using emoji variations or single image)
    const productImages = product.image.startsWith('/')
        ? [product.image, product.image, product.image]
        : [product.image, '🥘', '🍽️'];

    // Add to Cart Handler
    const handleAddToCart = () => {
        const itemSpiceLevel = product.hot ? spiceLevel : null;
        addToCart(product, quantity, itemSpiceLevel);

        // Show notification
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    return (
        <div className="desi-product-page-wrapper">
            {/* Notification Toast */}
            {showNotification && (
                <div className="cart-notification">
                    ✅ Added to cart successfully!
                </div>
            )}

            <div className="desi-product-page">
                <div className="desi-container">
                    {/* Breadcrumb */}
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="breadcrumb-separator">›</span>
                        <Link to="/menu">Menu</Link>
                        <span className="breadcrumb-separator">›</span>
                        <span className="breadcrumb-category">{product.category}</span>
                        <span className="breadcrumb-separator">›</span>
                        <span className="breadcrumb-current">{product.name}</span>
                    </nav>

                    {/* Back to Menu Button */}
                    <Link to="/menu" className="back-to-menu-btn">
                        ← Back to Menu
                    </Link>

                    <div className="desi-product-layout">
                        {/* Left: Product Image */}
                        <div className="desi-image-section">
                            <div className="desi-main-image">
                                {productImages[selectedImage].startsWith('/') || productImages[selectedImage].startsWith('http') ? (
                                    <img src={productImages[selectedImage]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                                ) : (
                                    <span className="desi-product-emoji">{productImages[selectedImage]}</span>
                                )}
                                {product.hot && <span className="spicy-badge">🌶️ Spicy</span>}
                            </div>

                            {/* Functional Thumbnails */}
                            <div className="desi-thumbnails">
                                {productImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`desi-thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        {img.startsWith('/') || img.startsWith('http') ? (
                                            <img src={img} alt={`${product.name} view ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                                        ) : (
                                            img
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Right: Product Details */}
                        <div className="desi-details-section">
                            <h1 className="desi-product-title">{product.name}</h1>

                            <div className="desi-section">
                                <h3 className="desi-section-title">Description</h3>
                                <p className="desi-text">
                                    {product.fullDescription || product.description}
                                </p>
                            </div>

                            {/* Ingredients Section */}
                            {product.ingredients && product.ingredients.length > 0 && (
                                <div className="desi-section ingredients-section">
                                    <h3 className="desi-section-title">🥘 Ingredients</h3>
                                    <div className="ingredients-grid">
                                        {product.ingredients.map((ingredient, index) => (
                                            <span key={index} className="ingredient-tag">
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features/Benefits Section */}
                            {product.features && product.features.length > 0 && (
                                <div className="desi-section features-section">
                                    <h3 className="desi-section-title">✨ What Makes it Special</h3>
                                    <ul className="features-list">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Prep Time Badge */}


                            {/* Spice Level Selector (only for spicy items) */}


                            {/* Rating & Reviews */}
                            <div className="product-rating">
                                <div className="stars">
                                    {'⭐'.repeat(Math.floor(product.rating))}
                                    {product.rating % 1 !== 0 && '⭐'}
                                </div>
                                <span className="rating-text">{product.rating}/5.0</span>
                                <span className="review-count">({product.reviews} reviews)</span>
                            </div>

                            {/* Dietary Badges */}


                            {/* Variant Selector */}
                            {product.variants && (
                                <div className="variant-selector" style={{ marginBottom: '20px' }}>
                                    <h3 className="desi-section-title" style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Select Size:</h3>
                                    <div className="variant-options" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                        {product.variants.map((variant, index) => (
                                            <button
                                                key={index}
                                                className={`variant-btn ${selectedVariant === index ? 'active' : ''}`}
                                                onClick={() => setSelectedVariant(index)}
                                                style={{
                                                    padding: '8px 16px',
                                                    border: selectedVariant === index ? '2px solid #333' : '1px solid #ddd',
                                                    borderRadius: '20px',
                                                    background: selectedVariant === index ? '#fff' : '#f9f9f9',
                                                    color: '#333',
                                                    fontWeight: '600',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {variant.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quantity Selector & Price */}
                            <div className="desi-price-section">
                                <div className="price-quantity">
                                    <div className="desi-price">
                                        {product.variants ? product.variants[selectedVariant].price : product.price}
                                    </div>
                                </div>
                                <Link to="/contact" className="desi-add-btn" style={{ textAlign: 'center', textDecoration: 'none' }}>
                                    Contact to Order
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Related Products Section */}
                    {relatedProducts.length > 0 && (
                        <div className="related-products">
                            <h2 className="related-title">You May Also Like</h2>
                            <div className="related-grid">
                                {relatedProducts.map((item) => (
                                    <Link to={`/product/${item.id}`} key={item.id} className="related-card">
                                        <div className="related-image">
                                            {item.image.startsWith('/') || item.image.startsWith('http') ? (
                                                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <span className="related-emoji">{item.image}</span>
                                            )}
                                        </div>
                                        <h3 className="related-name">{item.name}</h3>
                                        <div className="related-rating">
                                            {'⭐'.repeat(4)} 4.5
                                        </div>
                                        <p className="related-price">{item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
