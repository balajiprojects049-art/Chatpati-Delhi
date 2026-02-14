import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { addToCart } from './utils/cart'

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartToast, setCartToast] = useState(false);

    const handleAddToCart = (item) => {
        addToCart(item, 1);
        setCartToast(true);
        setTimeout(() => setCartToast(false), 1800);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto slide hero
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const heroSlides = [
        {
            title: "Authentic Delhi Street Food",
            subtitle: "Experience the vibrant flavors of Delhi's finest chaats and traditional dishes",
            bg: "linear-gradient(135deg, #8B4513 0%, #D4AF37 100%)"
        },
        {
            title: "Food Served With Love",
            subtitle: "Every dish prepared with care and passion by our expert chefs",
            bg: "linear-gradient(135deg, #D4AF37 0%, #FF6B35 100%)"
        },
        {
            title: "Over 50 Delicious Items",
            subtitle: "From traditional chaats to royal thalis - taste the magic of Delhi",
            bg: "linear-gradient(135deg, #B8921F 0%, #8B4513 100%)"
        }
    ];

    // Menu categories
    const categories = [
        { id: 'all', name: 'All', icon: '🍽️' },
        { id: 'chaat', name: 'Chaat', icon: '🥗' },
        { id: 'mumbai', name: 'Mumbai Local', icon: '🚂' },
        { id: 'snacks', name: 'Snacks', icon: '🍢' },
        { id: 'tandoor', name: 'Tandoor', icon: '🔥' },
        { id: 'sizzling', name: 'Sizzling', icon: '🍳' },
        { id: 'biryani', name: 'Biryani', icon: '🍛' },
        { id: 'thali', name: 'Thalis', icon: '🍱' },
        { id: 'curry', name: 'Curry', icon: '🍲' },
        { id: 'bread', name: 'Bread', icon: '🥖' },
        { id: 'parantha', name: 'Paranthas', icon: '🫓' },
        { id: 'rolls', name: 'Rolls', icon: '🌯' },
        { id: 'sweets', name: 'Sweets', icon: '🍮' },
        { id: 'drinks', name: 'Drinks', icon: '🥤' },
    ];

    // Menu items - ALL items from menu cards with exact names and prices
    const menuItems = [
        // Chatpati Chaat
        { id: 1, name: 'Bhara Samosa (2 Pcs)', price: '$4.00', category: 'chaat', image: '🥟', hot: true, description: 'Stuffed samosas' },
        { id: 2, name: 'Khasta Kachori (2 Pcs)', price: '$6.50', category: 'chaat', image: '🥙', hot: false, description: 'Crispy kachoris' },
        { id: 3, name: 'Jaypuri Pyaaz Kachori (2 Pcs)', price: '$6.50', category: 'chaat', image: '🥙', hot: false, description: 'Onion kachori' },
        { id: 4, name: 'Chandni Chowk Ke Bhalle', price: '$8.95', category: 'chaat', image: '🥗', hot: false, description: 'Famous Delhi bhalla' },
        { id: 5, name: 'Churmuri Bhel', price: '$8.95', category: 'chaat', image: '🥘', hot: false, description: 'Puffed rice mix' },
        { id: 6, name: 'Golgappe (12 Pcs)', price: '$13.95', category: 'chaat', image: '🥙', hot: true, description: 'Water-filled puri' },
        { id: 7, name: 'Sev Puri Dahi Puri (SPDP)', price: '$8.95', category: 'chaat', image: '🥗', hot: false, description: 'Sev and dahi puri combo' },
        { id: 8, name: 'Papri Chaat', price: '$8.95', category: 'chaat', image: '🥘', hot: false, description: 'Crispy papri chaat' },
        { id: 9, name: 'Dahi Aloo Tikki', price: '$8.95', category: 'chaat', image: '🍢', hot: false, description: 'Potato tikki with yogurt' },
        { id: 10, name: 'Raj Kachori', price: '$9.95', category: 'chaat', image: '🥙', hot: true, description: 'King size kachori' },
        { id: 11, name: 'Chola Tikki Chaat', price: '$9.95', category: 'chaat', image: '🥘', hot: false, description: 'Chickpea tikki chaat' },
        { id: 12, name: 'Samosa Chaat', price: '$9.95', category: 'chaat', image: '🌮', hot: true, description: 'Samosa with chole' },
        { id: 13, name: 'Veg Pakode', price: '$8.95', category: 'chaat', image: '🍢', hot: false, description: 'Vegetable fritters' },
        { id: 14, name: 'Chutney Paneer Pakora', price: '$10.95', category: 'chaat', image: '🧀', hot: false, description: 'Paneer pakoras' },
        { id: 15, name: 'Golgappa Basket (24 Pcs)', price: '$24.95', category: 'chaat', image: '🥙', hot: true, description: 'Large golgappa serving' },
        { id: 16, name: 'Ghungaraale Fries', price: '$6.95', category: 'chaat', image: '🍟', hot: false, description: 'Crispy fries' },
        { id: 17, name: 'Sev Puri', price: '$8.95', category: 'chaat', image: '🥗', hot: false, description: 'Sev puri snack' },
        { id: 18, name: 'Kurkure Tokri', price: '$9.95', category: 'chaat', image: '🥙', hot: false, description: 'Crispy basket' },
        { id: 19, name: 'Golgappa (8Pcs)', price: '$8.95', category: 'chaat', image: '🥙', hot: false, description: 'Regular golgappa' },
        { id: 20, name: 'Sabudana Wada', price: '$8.95', category: 'chaat', image: '🥘', hot: false, description: 'Tapioca vada' },

        // Mumbai Local
        { id: 21, name: 'Bun Samosa', price: '$9.95', category: 'mumbai', image: '🍔', hot: false, description: 'Samosa in bun' },
        { id: 22, name: 'Karjat Vada Pav', price: '$9.95', category: 'mumbai', image: '🍔', hot: true, description: 'Potato vada in pav' },
        { id: 23, name: 'Garlic Cheese Vada Pav', price: '$10.95', category: 'mumbai', image: '🍔', hot: false, description: 'Cheesy vada pav' },
        { id: 24, name: 'Kacchi Dabeli', price: '$9.95', category: 'mumbai', image: '🍔', hot: false, description: 'Spicy dabeli' },
        { id: 25, name: 'Kadak Pav Bhaji', price: '$11.95', category: 'mumbai', image: '🥙', hot: true, description: 'Spicy pav bhaji' },
        { id: 26, name: 'Cheese Pav Bhaji (Amul)', price: '$12.95', category: 'mumbai', image: '🥙', hot: false, description: 'Cheese pav bhaji' },
        { id: 27, name: 'Chicken Keema Pav', price: '$15.95', category: 'mumbai', image: '🍔', hot: true, description: 'Chicken keema with pav' },
        { id: 28, name: 'Veg Keema Pav', price: '$12.95', category: 'mumbai', image: '🍔', hot: false, description: 'Veg keema with pav' },
        { id: 29, name: 'Missal Pav', price: '$11.95', category: 'mumbai', image: '🥙', hot: true, description: 'Spicy missal pav' },

        // Snacks Ka Chaska
        { id: 30, name: 'Veg Cheese Burger', price: '$10.95', category: 'snacks', image: '🍔', hot: false, description: 'Vegetable cheese burger' },
        { id: 31, name: 'Aloo Subji W/ Khasta Kachori', price: '$10.95', category: 'snacks', image: '🥘', hot: false, description: 'Potato curry with kachori' },
        { id: 32, name: 'Chole Bhature', price: '$12.95', category: 'snacks', image: '🥙', hot: true, description: 'Chickpeas with bhatura' },
        { id: 33, name: 'Bedmi Aloo Puri', price: '$11.95', category: 'snacks', image: '🥘', hot: false, description: 'Bedmi with aloo' },
        { id: 34, name: 'Veg Keema Roomali Roti', price: '$11.95', category: 'snacks', image: '🫓', hot: false, description: 'Veg keema with roti' },
        { id: 35, name: 'Sarson Ka Saag Makka Roti', price: '$12.95', category: 'snacks', image: '🥘', hot: false, description: 'Mustard greens with cornbread' },
        { id: 36, name: 'Chicken Keema Roomali Roti', price: '$16.95', category: 'snacks', image: '🫓', hot: true, description: 'Chicken keema with roti' },

        // The Tikkawala (Tandoor)
        { id: 37, name: 'Sutli Chicken', price: '$16.95', category: 'tandoor', image: '🍗', hot: true, description: 'String-tied tandoori chicken' },
        { id: 38, name: 'Barrah Chicken', price: '$16.95', category: 'tandoor', image: '🍗', hot: false, description: 'Spicy chicken pieces' },
        { id: 39, name: 'Chicken Malai', price: '$16.95', category: 'tandoor', image: '🍗', hot: false, description: 'Creamy chicken tikka' },
        { id: 40, name: 'Chicken Chatpati', price: '$16.95', category: 'tandoor', image: '🍗', hot: true, description: 'Spicy tandoori chicken' },

        // What's Sizzling
        { id: 41, name: 'Veg Cutlet Sizzler', price: '$11.95', category: 'sizzling', image: '🍳', hot: false, description: 'Vegetable cutlet sizzler' },
        { id: 42, name: 'Bhatti Paneer Sizzler', price: '$13.95', category: 'sizzling', image: '🔥', hot: true, description: 'Grilled paneer sizzler' },
        { id: 43, name: 'Chaap Chaap Sizzler', price: '$12.95', category: 'sizzling', image: '🔥', hot: false, description: 'Soya chaap sizzler' },
        { id: 44, name: 'Chicken Tikka Sizzler', price: '$16.95', category: 'sizzling', image: '🍗', hot: true, description: 'Chicken tikka sizzler' },
        { id: 45, name: 'Lamb Chops', price: '$26.99', category: 'sizzling', image: '🍖', hot: true, description: 'Grilled lamb chops' },
        { id: 46, name: 'Fish Amritsari', price: '$14.95', category: 'sizzling', image: '🐟', hot: false, description: 'Amritsari fried fish' },

        // Biryani Ki Kahani
        { id: 47, name: 'Tarkari Biryani (Veg)', price: '$14.95', category: 'biryani', image: '🍛', hot: false, description: 'Vegetable biryani' },
        { id: 48, name: 'Purani Delhi Chicken Biryani', price: '$16.95', category: 'biryani', image: '🍛', hot: true, description: 'Old Delhi chicken biryani' },
        { id: 49, name: 'Purani Delhi Goat Biryani', price: '$21.95', category: 'biryani', image: '🍛', hot: true, description: 'Old Delhi goat biryani' },

        // Tadka Marke (Comes With Rice)
        { id: 50, name: 'Aloo Gobhi', price: '$12.95', category: 'curry', image: '🥔', hot: false, description: 'Potato and cauliflower curry' },
        { id: 51, name: 'Pindi Chole', price: '$12.95', category: 'curry', image: '🥘', hot: true, description: 'Pindi-style chickpeas' },
        { id: 52, name: 'Daal Makhanwala', price: '$13.95', category: 'curry', image: '🍲', hot: false, description: 'Creamy black lentils' },
        { id: 53, name: 'Peeli Daal (Yellow Daal)', price: '$12.95', category: 'curry', image: '🍲', hot: false, description: 'Yellow lentil curry' },
        { id: 54, name: 'Paneer Makhanwala', price: '$14.95', category: 'curry', image: '🧀', hot: true, description: 'Paneer in butter gravy' },
        { id: 55, name: 'Palak Paneer', price: '$14.95', category: 'curry', image: '🥬', hot: false, description: 'Spinach and paneer' },
        { id: 56, name: 'Kadai Paneer', price: '$14.95', category: 'curry', image: '🥘', hot: false, description: 'Paneer kadai style' },
        { id: 57, name: 'Malai Kofta', price: '$14.95', category: 'curry', image: '🥘', hot: false, description: 'Creamy kofta curry' },
        { id: 58, name: 'Paneer Bhatti Masala', price: '$14.95', category: 'curry', image: '🧀', hot: true, description: 'Grilled paneer masala' },

        // Curry Main Kya Hai
        { id: 59, name: 'Chicken Curry', price: '$16.95', category: 'curry', image: '🍗', hot: true, description: 'Traditional chicken curry' },
        { id: 60, name: 'Butter Chicken', price: '$16.95', category: 'curry', image: '🍗', hot: true, description: 'Butter chicken masala' },
        { id: 61, name: 'Goat Curry', price: '$21.95', category: 'curry', image: '🍖', hot: true, description: 'Spicy goat curry' },
        { id: 62, name: 'Karahi Sukha', price: '$23.95', category: 'curry', image: '🍲', hot: true, description: 'Dry kadai curry' },
        { id: 63, name: 'Chicken Tikka Masala', price: '$16.95', category: 'curry', image: '🍗', hot: true, description: 'Chicken tikka in masala' },
        { id: 64, name: 'Chicken Keema Masala', price: '$17.95', category: 'curry', image: '🍲', hot: true, description: 'Minced chicken curry' },

        // Roll Baby Roll
        { id: 65, name: 'Amritsar Soya Chaap Roll', price: '$11.95', category: 'rolls', image: '🌯', hot: false, description: 'Soya chaap wrap' },
        { id: 66, name: 'Chatpata Aloo Roll', price: '$11.95', category: 'rolls', image: '🌯', hot: false, description: 'Spicy potato roll' },
        { id: 67, name: 'Tawa Paneer Roll', price: '$12.95', category: 'rolls', image: '🌯', hot: false, description: 'Grilled paneer roll' },
        { id: 68, name: 'Double Eggroll Roll', price: '$12.95', category: 'rolls', image: '🌯', hot: false, description: 'Double egg roll' },
        { id: 69, name: 'Pudina Chicken Roll', price: '$13.95', category: 'rolls', image: '🌯', hot: true, description: 'Mint chicken roll' },
        { id: 70, name: 'Chicken Keema Roll', price: '$14.95', category: 'rolls', image: '🌯', hot: true, description: 'Chicken keema wrap' },

        // C.P.D Special Thalis
        { id: 71, name: 'Kulcha Thali', price: '$15.95', category: 'thali', image: '🍱', hot: false, description: 'Kulcha with sides' },
        { id: 72, name: 'C.P.D Veg Thali', price: '$17.95', category: 'thali', image: '🍱', hot: true, description: 'Full vegetarian thali' },
        { id: 73, name: 'C.P.D Non Veg Thali', price: '$22.95', category: 'thali', image: '🍱', hot: true, description: 'Non-veg complete thali' },

        // Bachaa Party Special
        { id: 74, name: 'Baccha Maggi', price: '$8.95', category: 'snacks', image: '🍜', hot: false, description: 'Kids noodles' },
        { id: 75, name: 'Fries', price: '$7.95', category: 'snacks', image: '🍟', hot: false, description: 'French fries' },
        { id: 76, name: 'Bacha Combo', price: '$13.95', category: 'snacks', image: '🍔', hot: false, description: 'Chole Cheese Burger, Fries & Mango Lassi' },

        // Tandoori Daawat (Bread)
        { id: 77, name: 'Butter Naan', price: '$3.95', category: 'bread', image: '🥖', hot: false, description: 'Butter naan' },
        { id: 78, name: 'Garlic Naan', price: '$4.95', category: 'bread', image: '🥖', hot: false, description: 'Garlic flavored naan' },
        { id: 79, name: 'Tandoori Roti', price: '$3.95', category: 'bread', image: '🫓', hot: false, description: 'Tandoori roti' },
        { id: 80, name: 'Roomali Roti', price: '$4.95', category: 'bread', image: '🫓', hot: false, description: 'Thin roomali roti' },
        { id: 81, name: 'Chur Chur Naan', price: '$4.95', category: 'bread', image: '🥖', hot: false, description: 'Crispy layered naan' },
        { id: 82, name: 'Lachaa Parantha', price: '$4.95', category: 'bread', image: '🫓', hot: false, description: 'Layered parantha' },
        { id: 83, name: 'Paneer Kulcha', price: '$5.95', category: 'bread', image: '🥖', hot: false, description: 'Paneer stuffed kulcha' },
        { id: 84, name: 'Gobhi Kulcha', price: '$4.95', category: 'bread', image: '🥖', hot: false, description: 'Cauliflower kulcha' },
        { id: 85, name: 'Pyaaz Kulcha', price: '$4.95', category: 'bread', image: '🥖', hot: false, description: 'Onion kulcha' },
        { id: 86, name: 'Aloo Kulcha', price: '$4.95', category: 'bread', image: '🥖', hot: false, description: 'Potato kulcha' },
        { id: 87, name: 'Mirchi Naan', price: '$4.95', category: 'bread', image: '🥖', hot: true, description: 'Chili naan' },
        { id: 88, name: 'Mithi Cheese Naan', price: '$5.95', category: 'bread', image: '🥖', hot: false, description: 'Sweet cheese naan' },

        // Old School Paranthas
        { id: 89, name: 'Aloo Parantha', price: '$11.95', category: 'parantha', image: '🫓', hot: false, description: 'Potato parantha' },
        { id: 90, name: 'Gobhi Parantha', price: '$11.95', category: 'parantha', image: '🫓', hot: false, description: 'Cauliflower parantha' },
        { id: 91, name: 'Paneer Parantha', price: '$12.95', category: 'parantha', image: '🫓', hot: false, description: 'Paneer parantha' },
        { id: 92, name: 'Mix Veg Parantha', price: '$12.95', category: 'parantha', image: '🫓', hot: false, description: 'Mixed veg parantha' },
        { id: 93, name: 'Cheese Parantha', price: '$12.95', category: 'parantha', image: '🫓', hot: false, description: 'Cheese parantha' },

        // Meethe Me (Sweets)
        { id: 94, name: 'Brown Rabdi', price: '$6.95', category: 'sweets', image: '🍮', hot: false, description: 'Sweet rabdi' },
        { id: 95, name: 'Gulab Jamun', price: '$5.95', category: 'sweets', image: '🍡', hot: false, description: 'Gulab jamun balls' },
        { id: 96, name: 'Rasmalai', price: '$6.95', category: 'sweets', image: '🍰', hot: false, description: 'Rasmalai dessert' },
        { id: 97, name: 'Malpua', price: '$6.95', category: 'sweets', image: '🥞', hot: false, description: 'Sweet pancakes' },
        { id: 98, name: 'Kulfi Falooda', price: '$6.95', category: 'sweets', image: '🍨', hot: false, description: 'Kulfi with falooda' },
        { id: 99, name: 'Malai Kulfi', price: '$4.95', category: 'sweets', image: '🍦', hot: false, description: 'Creamy kulfi' },
        { id: 100, name: 'Moong Dal Halwa', price: '$6.95', category: 'sweets', image: '🍮', hot: false, description: 'Lentil halwa' },
        { id: 101, name: 'Rasgulla', price: '$4.95', category: 'sweets', image: '🍡', hot: false, description: 'Spongy rasgulla' },

        // Kya Piyoge (Drinks)
        { id: 102, name: 'Aam Ki Lassi', price: '$4.95', category: 'drinks', image: '🥤', hot: false, description: 'Mango lassi' },
        { id: 103, name: 'Masal Chanch', price: '$4.95', category: 'drinks', image: '🥤', hot: false, description: 'Spiced buttermilk' },
        { id: 104, name: 'Meethi Lassi', price: '$4.95', category: 'drinks', image: '🥤', hot: false, description: 'Sweet lassi' },
        { id: 105, name: 'Aam Ka Panna', price: '$4.95', category: 'drinks', image: '🥤', hot: false, description: 'Raw mango drink' },
        { id: 106, name: 'Jal Jeera Soda', price: '$4.95', category: 'drinks', image: '🥤', hot: false, description: 'Cumin soda' },
        { id: 107, name: 'Gulab Falooda', price: '$5.95', category: 'drinks', image: '🥤', hot: false, description: 'Rose falooda' },
        { id: 108, name: 'Mango Shake', price: '$6.95', category: 'drinks', image: '🥤', hot: false, description: 'Mango shake' },
        { id: 109, name: 'Vanilla Shake', price: '$6.95', category: 'drinks', image: '🥤', hot: false, description: 'Vanilla shake' },
        { id: 110, name: 'Chocolate Shake', price: '$6.95', category: 'drinks', image: '🥤', hot: false, description: 'Chocolate shake' },
        { id: 111, name: 'Rose Shake', price: '$6.95', category: 'drinks', image: '🥤', hot: false, description: 'Rose shake' },
        { id: 112, name: 'Cold Coffee', price: '$6.95', category: 'drinks', image: '☕', hot: false, description: 'Cold coffee' },
        { id: 113, name: 'Kesar Dry Fruit Milk', price: '$6.95', category: 'drinks', image: '🥛', hot: false, description: 'Saffron milk' },
        { id: 114, name: 'Adrak Ki Chai', price: '$3.00', category: 'drinks', image: '☕', hot: true, description: 'Ginger tea' },
        { id: 115, name: 'Coffee', price: '$3.00', category: 'drinks', image: '☕', hot: true, description: 'Hot coffee' },
        { id: 116, name: 'Coke', price: '$2.50', category: 'drinks', image: '🥤', hot: false, description: 'Coca-Cola' },
        { id: 117, name: 'Sprite', price: '$2.50', category: 'drinks', image: '🥤', hot: false, description: 'Sprite' },
        { id: 118, name: 'Limca', price: '$3.95', category: 'drinks', image: '🥤', hot: false, description: 'Limca' },
        { id: 119, name: 'Thums Up', price: '$3.95', category: 'drinks', image: '🥤', hot: false, description: 'Thums Up' },
        { id: 120, name: 'Fanta', price: '$2.50', category: 'drinks', image: '🥤', hot: false, description: 'Fanta' },
        { id: 121, name: 'Water', price: '$2.00', category: 'drinks', image: '💧', hot: false, description: 'Bottled water' },
        { id: 122, name: 'Masala Soda', price: '$4.95', category: 'drinks', image: '🥤', hot: false, description: 'Spiced soda' },
    ];

    const filteredItems = selectedCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);



    const stats = [
        { icon: '👥', value: '5000+', label: 'Happy Customers' },
        { icon: '⭐', value: '99%', label: 'Quality Score' },
        { icon: '📅', value: '10+ Years', label: 'Of Excellence' },
        { icon: '🍽️', value: '120+', label: 'Menu Items' },
    ];

    const testimonials = [
        { name: 'Rahul S.', text: 'Best chaat in town! Tastes just like Delhi street food.', rating: 5 },
        { name: 'Priya M.', text: 'The thalis are amazing! Feels like home-cooked food.', rating: 5 },
        { name: 'Amit K.', text: 'Authentic flavors and great service. Highly recommended!', rating: 5 },
    ];

    return (
        <div className="app">
            {/* Header */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <nav className="nav">
                        <div className="logo-container">
                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23D4AF37'/%3E%3Ccircle cx='100' cy='100' r='85' fill='white'/%3E%3Ccircle cx='100' cy='100' r='75' fill='%23D4AF37'/%3E%3Ctext x='100' y='95' text-anchor='middle' fill='white' font-size='40' font-weight='bold' font-family='Arial'%3ECPD%3C/text%3E%3Ctext x='100' y='50' text-anchor='middle' fill='%23D4AF37' font-size='16' font-family='Arial'%3ECHATPATI DELHI%3C/text%3E%3Ctext x='100' y='160' text-anchor='middle' fill='%23D4AF37' font-size='12' font-family='Arial'%3EFOOD SERVED WITH LOVE%3C/text%3E%3C/svg%3E"
                                alt="Chatpati Delhi Logo"
                                className="logo"
                            />
                            <div className="brand-text">
                                <h1>Chatpati Delhi</h1>
                                <p>Food Served With Love</p>
                            </div>
                        </div>
                        <ul className="nav-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <button className="mobile-menu-btn">☰</button>
                    </nav>
                </div>
            </header>

            {/* Hero Slider */}
            <section id="home" className="hero-slider">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ background: slide.bg }}
                    >
                        <div className="hero-content">
                            <h1 className="hero-title">{slide.title}</h1>
                            <p className="hero-subtitle">{slide.subtitle}</p>
                            <div className="hero-buttons">
                                <a href="#menu" className="btn btn-primary">View Menu</a>
                                <a href="#contact" className="btn btn-secondary">Order Now</a>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="slider-dots">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="section menu-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Delicious Menu</h2>
                        <p className="section-description">
                            Explore our wide variety of authentic Delhi street food and traditional dishes
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="category-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                <span className="category-icon">{cat.icon}</span>
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="product-grid">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="product-card">
                                {item.hot && <span className="badge-hot">Hot</span>}
                                <div className="product-image">
                                    <span className="product-emoji">{item.image}</span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{item.name}</h3>
                                    <p className="product-description">{item.description}</p>
                                    <div className="product-footer">
                                        <span className="product-price">{item.price}</span>
                                        <div className="product-actions">
                                            <Link to={`/product/${item.id}`} className="btn-view">View</Link>
                                            <button className="btn-add" onClick={() => handleAddToCart(item)}>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about-section">
                <div className="container">
                    <div className="section-title">
                        <h2>About Chatpati Delhi</h2>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <h3>Our Story</h3>
                            <p>
                                Chatpati Delhi was born from a simple idea — bringing the true taste of Delhi street food to your table.
                                We started with a passion for authentic flavors and the desire to keep our cultural roots alive through
                                food made the right way.
                            </p>
                            <p>
                                At Chatpati Delhi, we celebrate the taste of our heritage and deliver it fresh to your table,
                                just the way it was meant to be.
                            </p>
                        </div>
                        <div className="about-card">
                            <h3>Our Mission</h3>
                            <p>
                                We are committed to providing the freshest, highest-quality dishes while preserving traditional
                                recipes and authentic flavors that have been passed down through generations.
                            </p>
                            <p>
                                Transparency, quality, and long-term relationships lie at the heart of everything we do.
                                Your satisfaction and taste buds always come first.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section values-section">
                <div className="container">
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Quality First</h3>
                            <p>We never compromise on quality. Every dish is carefully prepared and inspected.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3>Customer Care</h3>
                            <p>Your satisfaction is our priority. We serve you with dedication and honesty.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌱</div>
                            <h3>Sustainability</h3>
                            <p>We support eco-friendly practices and use fresh, quality ingredients.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Customers Say</h2>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((review, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="stars">{'⭐'.repeat(review.rating)}</div>
                                <p className="testimonial-text">"{review.text}"</p>
                                <p className="testimonial-author">— {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="section contact-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Get in Touch</h2>
                    </div>
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@chatpatidelhi.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (732) 499-9387</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Address</h4>
                                    <p>Fratelli PSA, 109,823, 5th Ave, USA</p>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" className="form-input" />
                            <input type="email" placeholder="Your Email" className="form-input" />
                            <input type="tel" placeholder="Phone Number" className="form-input" />
                            <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
                            <button type="submit" className="btn btn-primary btn-full">Send Message ➤</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {cartToast && <div className="cart-toast">✅ Added to cart</div>}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Chatpati Delhi</h3>
                            <p>Authentic Delhi street food served with love. Experience the vibrant flavors of India.</p>
                            <div className="social-links">
                                <a href="#" className="social-link">📘</a>
                                <a href="#" className="social-link">📷</a>
                                <a href="#" className="social-link">🐦</a>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <a href="#home">Home</a>
                            <a href="#menu">Menu</a>
                            <a href="#about">About Us</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="footer-section">
                            <h3>Hours</h3>
                            <p>Monday - Friday<br />11:00 AM - 10:00 PM</p>
                            <p>Saturday - Sunday<br />10:00 AM - 11:00 PM</p>
                        </div>
                        <div className="footer-section">
                            <h3>Contact</h3>
                            <p>📍 Fratelli PSA, 109,823<br />5th Ave, USA</p>
                            <p>📞 +1 (732) 499-9387</p>
                            <p>📧 info@chatpatidelhi.com</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 Chatpati Delhi. All rights reserved. Food Served With Love ❤️</p>
                    </div>
                </div>
            </footer>

            {/* Product Detail Modal */}
            {showModal && selectedProduct && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>×</button>

                        <div className="modal-body">
                            <div className="modal-image">
                                <span className="modal-emoji">{selectedProduct.image}</span>
                            </div>

                            <div className="modal-details">
                                <a href="#menu" className="back-link" onClick={handleCloseModal}>← Back to Products</a>
                                <h2 className="modal-title">{selectedProduct.name}</h2>

                                <div className="modal-section">
                                    <h3>Description</h3>
                                    <p>{selectedProduct.description}</p>
                                </div>

                                <div className="modal-section">
                                    <h3>Details</h3>
                                    <p>Authentic Delhi-style {selectedProduct.name.toLowerCase()} prepared with traditional recipes and fresh ingredients. Perfect for food lovers who appreciate genuine flavors.</p>
                                </div>

                                <div className="modal-info-box">
                                    <div className="info-row">
                                        <span className="info-label">Category:</span>
                                        <span className="info-value">{selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Availability:</span>
                                        <span className="info-value availability-badge">In Stock</span>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <div className="modal-price">{selectedProduct.price}</div>
                                    <button className="btn-add-to-cart">🛒 Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
