import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

// Menu items data
const menuItems = [
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
    { id: 21, name: 'Bun Samosa', price: '$9.95', category: 'mumbai', image: '🍔', hot: false, description: 'Samosa in bun' },
    { id: 22, name: 'Karjat Vada Pav', price: '$9.95', category: 'mumbai', image: '🍔', hot: true, description: 'Potato vada in pav' },
    { id: 23, name: 'Garlic Cheese Vada Pav', price: '$10.95', category: 'mumbai', image: '🍔', hot: false, description: 'Cheesy vada pav' },
    { id: 24, name: 'Kacchi Dabeli', price: '$9.95', category: 'mumbai', image: '🍔', hot: false, description: 'Spicy dabeli' },
    { id: 25, name: 'Kadak Pav Bhaji', price: '$11.95', category: 'mumbai', image: '🥙', hot: true, description: 'Spicy pav bhaji' },
    { id: 26, name: 'Cheese Pav Bhaji (Amul)', price: '$12.95', category: 'mumbai', image: '🥙', hot: false, description: 'Cheese pav bhaji' },
    { id: 27, name: 'Chicken Keema Pav', price: '$15.95', category: 'mumbai', image: '🍔', hot: true, description: 'Chicken keema with pav' },
    { id: 28, name: 'Veg Keema Pav', price: '$12.95', category: 'mumbai', image: '🍔', hot: false, description: 'Veg keema with pav' },
    { id: 29, name: 'Missal Pav', price: '$11.95', category: 'mumbai', image: '🥙', hot: true, description: 'Spicy missal pav' },
    { id: 30, name: 'Veg Cheese Burger', price: '$10.95', category: 'snacks', image: '🍔', hot: false, description: 'Vegetable cheese burger' },
    { id: 31, name: 'Aloo Subji W/ Khasta Kachori', price: '$10.95', category: 'snacks', image: '🥘', hot: false, description: 'Potato curry with kachori' },
    { id: 32, name: 'Chole Bhature', price: '$12.95', category: 'snacks', image: '🥙', hot: true, description: 'Chickpeas with bhatura' },
    { id: 33, name: 'Bedmi Aloo Puri', price: '$11.95', category: 'snacks', image: '🥘', hot: false, description: 'Bedmi with aloo' },
    { id: 34, name: 'Veg Keema Roomali Roti', price: '$11.95', category: 'snacks', image: '🫓', hot: false, description: 'Veg keema with roti' },
    { id: 35, name: 'Sarson Ka Saag Makka Roti', price: '$12.95', category: 'snacks', image: '🥘', hot: false, description: 'Mustard greens with cornbread' },
    { id: 36, name: 'Chicken Keema Roomali Roti', price: '$16.95', category: 'snacks', image: '🫓', hot: true, description: 'Chicken keema with roti' },
    { id: 37, name: 'Sutli Chicken', price: '$16.95', category: 'tandoor', image: '🍗', hot: true, description: 'String-tied tandoori chicken' },
    { id: 38, name: 'Barrah Chicken', price: '$16.95', category: 'tandoor', image: '🍗', hot: false, description: 'Spicy chicken pieces' },
    { id: 39, name: 'Chicken Malai', price: '$16.95', category: 'tandoor', image: '🍗', hot: false, description: 'Creamy chicken tikka' },
    { id: 40, name: 'Chicken Chatpati', price: '$16.95', category: 'tandoor', image: '🍗', hot: true, description: 'Spicy tandoori chicken' },
    { id: 41, name: 'Veg Cutlet Sizzler', price: '$11.95', category: 'sizzling', image: '🍳', hot: false, description: 'Vegetable cutlet sizzler' },
    { id: 42, name: 'Bhatti Paneer Sizzler', price: '$13.95', category: 'sizzling', image: '🔥', hot: true, description: 'Grilled paneer sizzler' },
    { id: 43, name: 'Chaap Chaap Sizzler', price: '$12.95', category: 'sizzling', image: '🔥', hot: false, description: 'Soya chaap sizzler' },
    { id: 44, name: 'Chicken Tikka Sizzler', price: '$16.95', category: 'sizzling', image: '🍗', hot: true, description: 'Chicken tikka sizzler' },
    { id: 45, name: 'Lamb Chops', price: '$26.99', category: 'sizzling', image: '🍖', hot: true, description: 'Grilled lamb chops' },
    { id: 46, name: 'Fish Amritsari', price: '$14.95', category: 'sizzling', image: '🐟', hot: false, description: 'Amritsari fried fish' },
    { id: 47, name: 'Tarkari Biryani (Veg)', price: '$14.95', category: 'biryani', image: '🍛', hot: false, description: 'Vegetable biryani' },
    { id: 48, name: 'Purani Delhi Chicken Biryani', price: '$16.95', category: 'biryani', image: '🍛', hot: true, description: 'Old Delhi chicken biryani' },
    { id: 49, name: 'Purani Delhi Goat Biryani', price: '$21.95', category: 'biryani', image: '🍛', hot: true, description: 'Old Delhi goat biryani' },
    { id: 50, name: 'Aloo Gobhi', price: '$12.95', category: 'curry', image: '🥔', hot: false, description: 'Potato and cauliflower curry' },
    { id: 51, name: 'Pindi Chole', price: '$12.95', category: 'curry', image: '🥘', hot: true, description: 'Pindi-style chickpeas' },
    { id: 52, name: 'Daal Makhanwala', price: '$13.95', category: 'curry', image: '🍲', hot: false, description: 'Creamy black lentils' },
    { id: 53, name: 'Peeli Daal (Yellow Daal)', price: '$12.95', category: 'curry', image: '🍲', hot: false, description: 'Yellow lentil curry' },
    { id: 54, name: 'Paneer Makhanwala', price: '$14.95', category: 'curry', image: '🧀', hot: true, description: 'Paneer in butter gravy' },
    { id: 55, name: 'Palak Paneer', price: '$14.95', category: 'curry', image: '🥬', hot: false, description: 'Spinach and paneer' },
    { id: 56, name: 'Kadai Paneer', price: '$14.95', category: 'curry', image: '🥘', hot: false, description: 'Paneer kadai style' },
    { id: 57, name: 'Malai Kofta', price: '$14.95', category: 'curry', image: '🥘', hot: false, description: 'Creamy kofta curry' },
    { id: 58, name: 'Paneer Bhatti Masala', price: '$14.95', category: 'curry', image: '🧀', hot: true, description: 'Grilled paneer masala' },
    { id: 59, name: 'Chicken Curry', price: '$16.95', category: 'curry', image: '🍗', hot: true, description: 'Traditional chicken curry' },
    { id: 60, name: 'Butter Chicken', price: '$16.95', category: 'curry', image: '🍗', hot: true, description: 'Butter chicken masala' },
    { id: 61, name: 'Goat Curry', price: '$21.95', category: 'curry', image: '🍖', hot: true, description: 'Spicy goat curry' },
    { id: 62, name: 'Karahi Sukha', price: '$23.95', category: 'curry', image: '🍲', hot: true, description: 'Dry kadai curry' },
    { id: 63, name: 'Chicken Tikka Masala', price: '$16.95', category: 'curry', image: '🍗', hot: true, description: 'Chicken tikka in masala' },
    { id: 64, name: 'Chicken Keema Masala', price: '$17.95', category: 'curry', image: '🍲', hot: true, description: 'Minced chicken curry' },
    { id: 65, name: 'Amritsar Soya Chaap Roll', price: '$11.95', category: 'rolls', image: '🌯', hot: false, description: 'Soya chaap wrap' },
    { id: 66, name: 'Chatpata Aloo Roll', price: '$11.95', category: 'rolls', image: '🌯', hot: false, description: 'Spicy potato roll' },
    { id: 67, name: 'Tawa Paneer Roll', price: '$12.95', category: 'rolls', image: '🌯', hot: false, description: 'Grilled paneer roll' },
    { id: 68, name: 'Double Eggroll Roll', price: '$12.95', category: 'rolls', image: '🌯', hot: false, description: 'Double egg roll' },
    { id: 69, name: 'Pudina Chicken Roll', price: '$13.95', category: 'rolls', image: '🌯', hot: true, description: 'Mint chicken roll' },
    { id: 70, name: 'Chicken Keema Roll', price: '$14.95', category: 'rolls', image: '🌯', hot: true, description: 'Chicken keema wrap' },
    { id: 71, name: 'Kulcha Thali', price: '$15.95', category: 'thali', image: '🍱', hot: false, description: 'Kulcha with sides' },
    { id: 72, name: 'C.P.D Veg Thali', price: '$17.95', category: 'thali', image: '🍱', hot: true, description: 'Full vegetarian thali' },
    { id: 73, name: 'C.P.D Non Veg Thali', price: '$22.95', category: 'thali', image: '🍱', hot: true, description: 'Non-veg complete thali' },
    { id: 74, name: 'Baccha Maggi', price: '$8.95', category: 'snacks', image: '🍜', hot: false, description: 'Kids noodles' },
    { id: 75, name: 'Fries', price: '$7.95', category: 'snacks', image: '🍟', hot: false, description: 'French fries' },
    { id: 76, name: 'Bacha Combo', price: '$13.95', category: 'snacks', image: '🍔', hot: false, description: 'Chole Cheese Burger, Fries & Mango Lassi' },
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
    { id: 89, name: 'Aloo Parantha', price: '$11.95', category: 'parantha', image: '🫓', hot: false, description: 'Potato parantha' },
    { id: 90, name: 'Gobhi Parantha', price: '$11.95', category: 'parantha', image: '🫓', hot: false, description: 'Cauliflower parantha' },
    { id: 91, name: 'Paneer Parantha', price: '$12.95', category: 'parantha', image: '🫓', hot: false, description: 'Paneer parantha' },
    { id: 92, name: 'Mix Veg Parantha', price: '$12.95', category: 'parantha', image: '🫓', hot: false, description: 'Mixed veg parantha' },
    { id: 93, name: 'Cheese Parantha', price: '$12.95', category: 'parantha', image: '🫓', hot: false, description: 'Cheese parantha' },
    { id: 94, name: 'Brown Rabdi', price: '$6.95', category: 'sweets', image: '🍮', hot: false, description: 'Sweet rabdi' },
    { id: 95, name: 'Gulab Jamun', price: '$5.95', category: 'sweets', image: '🍡', hot: false, description: 'Gulab jamun balls' },
    { id: 96, name: 'Rasmalai', price: '$6.95', category: 'sweets', image: '🍰', hot: false, description: 'Rasmalai dessert' },
    { id: 97, name: 'Malpua', price: '$6.95', category: 'sweets', image: '🥞', hot: false, description: 'Sweet pancakes' },
    { id: 98, name: 'Kulfi Falooda', price: '$6.95', category: 'sweets', image: '🍨', hot: false, description: 'Kulfi with falooda' },
    { id: 99, name: 'Malai Kulfi', price: '$4.95', category: 'sweets', image: '🍦', hot: false, description: 'Creamy kulfi' },
    { id: 100, name: 'Moong Dal Halwa', price: '$6.95', category: 'sweets', image: '🍮', hot: false, description: 'Lentil halwa' },
    { id: 101, name: 'Rasgulla', price: '$4.95', category: 'sweets', image: '🍡', hot: false, description: 'Spongy rasgulla' },
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

function ProductDetail() {
    const { id } = useParams();
    const product = menuItems.find(item => item.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="product-not-found">
                <Header />
                <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2>Product not found</h2>
                    <Link to="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="desi-product-page-wrapper">
            <Header />

            <div className="desi-product-page">
                <div className="desi-container">
                    <Link to="/" className="desi-back-link">
                        ← Back to Products
                    </Link>

                    <div className="desi-product-layout">
                        {/* Left: Product Image */}
                        <div className="desi-image-section">
                            <div className="desi-main-image">
                                <span className="desi-product-emoji">{product.image}</span>
                            </div>
                            {/* Thumbnails */}
                            <div className="desi-thumbnails">
                                <div className="desi-thumbnail active">{product.image}</div>
                                <div className="desi-thumbnail">🥘</div>
                                <div className="desi-thumbnail">🍽️</div>
                            </div>
                        </div>

                        {/* Right: Product Details */}
                        <div className="desi-details-section">
                            <h1 className="desi-product-title">{product.name}</h1>

                            <div className="desi-section">
                                <h3 className="desi-section-title">Description</h3>
                                <p className="desi-text">
                                    Bulk pack of authentic {product.name.toLowerCase()} — perfect for families, bakeries, or meal prep lovers.
                                </p>
                            </div>

                            <div className="desi-section">
                                <h3 className="desi-section-title">Details</h3>
                                <p className="desi-text">
                                    Our {product.name.toLowerCase()} come from authentic Delhi-style preparation. These items are made with
                                    a wholesome diet of traditional spices and have access to the finest ingredients, resulting in dishes
                                    with rich, golden flavors and superior nutrition. Perfect for all your cooking and dining needs.
                                </p>
                            </div>

                            <div className="desi-info-table">
                                <h3 className="desi-section-title" style={{ marginBottom: '1rem' }}>Product Info</h3>
                                <div className="desi-info-row">
                                    <span className="desi-info-label">Unit:</span>
                                    <span className="desi-info-value">piece</span>
                                    <span className="desi-gap" style={{ margin: '0 2rem' }}></span>
                                    <span className="desi-info-label">Availability:</span>
                                    <span className="desi-availability">In Stock</span>
                                </div>
                            </div>

                            <div className="desi-price-section">
                                <div className="desi-price">₹{product.price.replace('$', '')}</div>
                                <button className="desi-add-btn">
                                    <span className="desi-cart-icon">🛒</span>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetail;
