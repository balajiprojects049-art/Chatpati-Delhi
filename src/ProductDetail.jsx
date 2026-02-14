import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { addToCart } from './utils/cart';
import './index.css';
import './enhanced-styles.css';

// Menu items data with detailed descriptions
const menuItems = [
    {
        id: 1,
        name: 'Bhara Samosa (2 Pcs)',
        price: '$4.00',
        category: 'chaat',
        image: '🥟',
        hot: true,
        vegetarian: true,
        description: 'Crispy golden samosas stuffed with spiced potatoes and peas',
        fullDescription: 'Experience the authentic taste of Delhi with our handcrafted Bhara Samosas. Each samosa features a perfectly crispy, golden-brown exterior made from refined flour, encasing a flavorful filling of seasoned potatoes, green peas, and aromatic Indian spices.',
        ingredients: ['Refined Flour (Maida)', 'Potatoes', 'Green Peas', 'Cumin Seeds', 'Coriander Powder', 'Garam Masala', 'Green Chilies', 'Ginger', 'Vegetable Oil'],
        features: ['✓ Freshly made daily', '✓ Crispy & flaky texture', '✓ Authentic Delhi recipe', '✓ Served with mint & tamarind chutney', '✓ Perfect tea-time snack'],
        prepTime: '15 mins',
        rating: 4.8,
        reviews: 142
    },
    {
        id: 2,
        name: 'Khasta Kachori (2 Pcs)',
        price: '$6.50',
        category: 'chaat',
        image: '🥙',
        hot: false,
        vegetarian: true,
        description: 'Crispy deep-fried pastry with spiced lentil filling',
        fullDescription: 'Indulge in our crispy Khasta Kachoris, a beloved Delhi street food delicacy. These perfectly round, puffed pastries are filled with a savory mixture of spiced lentils and aromatic spices, creating an explosion of flavors in every bite.',
        ingredients: ['Refined Flour', 'Moong Dal (Yellow Lentils)', 'Fennel Seeds', 'Black Pepper', 'Asafoetida (Hing)', 'Red Chili Powder', 'Salt', 'Ghee'],
        features: ['✓ Extra crispy & flaky', '✓ Traditional Delhi recipe', '✓ Protein-rich lentil filling', '✓ Best with aloo sabzi', '✓ No artificial preservatives'],
        prepTime: '20 mins',
        rating: 4.6,
        reviews: 98
    },
    {
        id: 3,
        name: 'Jaypuri Pyaaz Kachori (2 Pcs)',
        price: '$6.50',
        category: 'chaat',
        image: '🥙',
        hot: false,
        vegetarian: true,
        description: 'Jaipur-style kachori with spiced onion filling',
        fullDescription: 'A royal treat from Jaipur brought to Delhi! Our Pyaaz Kachoris feature a crispy, flaky crust filled with caramelized onions seasoned with traditional Rajasthani spices. Each bite offers a perfect balance of sweet and savory flavors.',
        ingredients: ['All-Purpose Flour', 'Onions', 'Fennel Seeds', 'Nigella Seeds (Kalonji)', 'Red Chili Powder', 'Turmeric', 'Coriander Powder', 'Ghee'],
        features: ['✓ Jaipur authentic recipe', '✓ Sweet & savory flavor', '✓ Caramelized onions', '✓ Aromatic spice blend', '✓ Pairs well with sweet chutney'],
        prepTime: '25 mins',
        rating: 4.7,
        reviews: 87
    },
    {
        id: 4,
        name: 'Chandni Chowk Ke Bhalle',
        price: '$8.95',
        category: 'chaat',
        image: '🥗',
        hot: false,
        vegetarian: true,
        description: 'Soft lentil dumplings in creamy yogurt',
        fullDescription: 'Transport yourself to the streets of Old Delhi with our authentic Dahi Bhalle. Soft, melt-in-mouth lentil fritters soaked in creamy, sweetened yogurt and topped with tangy tamarind chutney, mint sauce, and aromatic spices.',
        ingredients: ['Urad Dal (Black Gram)', 'Fresh Yogurt', 'Tamarind', 'Green Chutney', 'Cumin Powder', 'Red Chili Powder', 'Black Salt', 'Sugar', 'Fresh Coriander'],
        features: ['✓ Famous Chandni Chowk style', '✓ Soft & fluffy bhallas', '✓ Homemade yogurt', '✓ Perfect balance of sweet & tangy', '✓ Cooling & refreshing'],
        prepTime: '10 mins',
        rating: 4.9,
        reviews: 203
    },
    {
        id: 5,
        name: 'Churmuri Bhel',
        price: '$8.95',
        category: 'chaat',
        image: '🥘',
        hot: false,
        vegetarian: true,
        description: 'Puffed rice mixed with vegetables and tangy chutneys',
        fullDescription: 'A light and crunchy street food favorite! Our Churmuri Bhel combines puffed rice with fresh vegetables, roasted peanuts, and a medley of tangy and spicy chutneys, creating a perfect harmony of textures and flavors.',
        ingredients: ['Puffed Rice', 'Onions', 'Tomatoes', 'Cucumber', 'Roasted Peanuts', 'Sev', 'Tamarind Chutney', 'Green Chutney', 'Lemon Juice', 'Chaat Masala'],
        features: ['✓ Low-calorie snack', '✓ Fresh vegetables', '✓ Crunchy texture', '✓ Tangy & spicy', '✓ Instant energy booster'],
        prepTime: '5 mins',
        rating: 4.5,
        reviews: 76
    },
    {
        id: 6,
        name: 'Golgappe (12 Pcs)',
        price: '$13.95',
        category: 'chaat',
        image: '🥙',
        hot: true,
        vegetarian: true,
        description: 'Crispy puris filled with tangy tamarind water',
        fullDescription: 'The most iconic Delhi street food! Our Golgappe (Pani Puri) feature ultra-crispy semolina shells filled with spiced mashed potatoes and chickpeas, then dunked in tangy-spicy tamarind water. An explosion of flavors in every bite!',
        ingredients: ['Semolina (Suji)', 'Potatoes', 'Chickpeas', 'Tamarind', 'Black Salt', 'Cumin Powder', 'Mint Leaves', 'Green Chilies', 'Coriander', 'Chaat Masala'],
        features: ['✓ Freshly made crispy puris', '✓ Two flavored waters (sweet & spicy)', '✓ Authentic Delhi taste', '✓ Made-to-order freshness', '✓ Most popular street food'],
        prepTime: '8 mins',
        rating: 4.9,
        reviews: 312
    },
    {
        id: 7,
        name: 'Sev Puri Dahi Puri (SPDP)',
        price: '$8.95',
        category: 'chaat',
        image: '🥗',
        hot: false,
        vegetarian: true,
        description: 'Crispy puris topped with potatoes, chutneys & yogurt',
        fullDescription: 'A delightful combination platter! Enjoy both Sev Puri (crispy puris topped with potatoes, onions, chutneys, and sev) and Dahi Puri (puris filled with yogurt, tamarind chutney, and spices) in one serving.',
        ingredients: ['Wheat Flour Puris', 'Potatoes', 'Yogurt', 'Onions', 'Tomatoes', 'Sev (Crispy Chickpea Noodles)', 'Tamarind Chutney', 'Mint Chutney', 'Pomegranate'],
        features: ['✓ Best of both worlds', '✓ Sweet, tangy & spicy', '✓ Crunchy & creamy textures', '✓ Fresh toppings', '✓ Mumbai-Delhi fusion'],
        prepTime: '10 mins',
        rating: 4.7,
        reviews: 156
    },
    {
        id: 8,
        name: 'Papri Chaat',
        price: '$8.95',
        category: 'chaat',
        image: '🥘',
        hot: false,
        vegetarian: true,
        description: 'Crispy wafers with potatoes, chickpeas & tangy chutneys',
        fullDescription: 'A classic Delhi chaat! Crispy wheat crackers (papri) topped with boiled potatoes, chickpeas, yogurt, and a symphony of sweet and spicy chutneys, garnished with fresh coriander and sev.',
        ingredients: ['Wheat Crackers (Papri)', 'Potatoes', 'Chickpeas', 'Yogurt', 'Tamarind Chutney', 'Green Chutney', 'Sev', 'Chaat Masala', 'Red Chili Powder', 'Coriander'],
        features: ['✓ Multi-layered flavors', '✓ Sweet & tangy taste', '✓ Crunchy & soft textures', '✓ Protein from chickpeas', '✓ Street food favorite'],
        prepTime: '8 mins',
        rating: 4.6,
        reviews: 134
    },
    {
        id: 9,
        name: 'Dahi Aloo Tikki',
        price: '$8.95',
        category: 'chaat',
        image: '🍢',
        hot: false,
        vegetarian: true,
        description: 'Crispy potato patties topped with yogurt & chutneys',
        fullDescription: 'Crispy-on-the-outside, soft-on-the-inside potato tikkis topped with cool yogurt, tangy tamarind chutney, spicy green chutney, and garnished with pomegranate seeds and fresh coriander.',
        ingredients: ['Potatoes', 'Bread Crumbs', 'Corn Flour', 'Yogurt', 'Tamarind Chutney', 'Mint Chutney', 'Chaat Masala', 'Pomegranate Seeds', 'Coriander'],
        features: ['✓ Crispy shallow-fried tikki', '✓ Cool & refreshing yogurt', '✓ Balance of temperatures', '✓ Healthy potato base', '✓ Perfect evening snack'],
        prepTime: '12 mins',
        rating: 4.8,
        reviews: 189
    },
    {
        id: 10,
        name: 'Raj Kachori',
        price: '$9.95',
        category: 'chaat',
        image: '🥙',
        hot: true,
        vegetarian: true,
        description: 'King-size kachori filled with potatoes, yogurt & chutneys',
        fullDescription: 'The king of all kachoris! A large, crispy kachori bowl filled with moong dal, potatoes, chickpeas, yogurt, and topped with an array of chutneys, sev, and spices. A complete meal in itself!',
        ingredients: ['Refined Flour', 'Moong Dal', 'Potatoes', 'Chickpeas', 'Yogurt', 'Tamarind Chutney', 'Green Chutney', 'Sev', 'Pomegranate', 'Spices'],
        features: ['✓ Extra large serving', '✓ Complete meal', '✓ 5 flavor profiles', '✓ Instagram-worthy presentation', '✓ Most filling chaat'],
        prepTime: '15 mins',
        rating: 4.9,
        reviews: 267
    },
    {
        id: 11,
        name: 'Chola Tikki Chaat',
        price: '$9.95',
        category: 'chaat',
        image: '🥘',
        hot: false,
        vegetarian: true,
        description: 'Potato tikki served with spiced chickpeas',
        fullDescription: 'A hearty combination of crispy potato tikkis served with spicy chickpea curry, topped with yogurt, chutneys, onions, and a sprinkle of aromatic spices.',
        ingredients: ['Potatoes', 'Chickpeas', 'Onions', 'Tomatoes', 'Yogurt', 'Garam Masala', 'Coriander Powder', 'Tamarind Chutney', 'Green Chutney', 'Chaat Masala'],
        features: ['✓ High protein content', '✓ Filling & satisfying', '✓ Spicy chickpea curry', '✓ Crispy tikki base', '✓ Complete nutrition'],
        prepTime: '18 mins',
        rating: 4.7,
        reviews: 145
    },
    {
        id: 12,
        name: 'Samosa Chaat',
        price: '$9.95',
        category: 'chaat',
        image: '🌮',
        hot: true,
        vegetarian: true,
        description: 'Crushed samosa topped with chole, yogurt & chutneys',
        fullDescription: 'The ultimate comfort food! Crispy samosas broken and topped with spicy chickpea curry, yogurt, tamarind and mint chutneys, creating a delicious medley of textures and flavors.',
        ingredients: ['Samosas', 'Chickpeas', 'Yogurt', 'Tamarind Chutney', 'Green Chutney', 'Onions', 'Sev', 'Chaat Masala', 'Coriander', 'Pomegranate'],
        features: ['✓ Two favorites in one', '✓ Extra spicy option', '✓ Generous portion', '✓ Perfect for sharing', '✓ Ultimate comfort food'],
        prepTime: '12 mins',
        rating: 4.8,
        reviews: 198
    },
    {
        id: 13,
        name: 'Veg Pakode',
        price: '$8.95',
        category: 'chaat',
        image: '🍢',
        hot: false,
        vegetarian: true,
        description: 'Mixed vegetable fritters in chickpea batter',
        fullDescription: 'Crispy vegetable fritters made with fresh seasonal vegetables dipped in spiced chickpea flour batter and deep-fried to golden perfection. Perfect with chai!',
        ingredients: ['Chickpea Flour (Besan)', 'Potatoes', 'Onions', 'Spinach', 'Cauliflower', 'Green Chilies', 'Ginger', 'Carom Seeds (Ajwain)', 'Turmeric', 'Red Chili Powder'],
        features: ['✓ Assorted vegetables', '✓ Crispy & golden', '✓ Perfect rainy day snack', '✓ Best with tea/coffee', '✓ Served hot & fresh'],
        prepTime: '15 mins',
        rating: 4.5,
        reviews: 112
    },
    {
        id: 14,
        name: 'Chutney Paneer Pakora',
        price: '$10.95',
        category: 'chaat',
        image: '🧀',
        hot: false,
        vegetarian: true,
        description: 'Paneer slices stuffed with mint chutney & deep-fried',
        fullDescription: 'Premium cottage cheese slices sandwiched with spicy mint chutney, coated in seasoned chickpea batter, and deep-fried until crispy. An elevated version of traditional pakoras!',
        ingredients: ['Fresh Paneer', 'Chickpea Flour', 'Mint Chutney', 'Coriander Chutney', 'Green Chilies', 'Ginger-Garlic Paste', 'Carom Seeds', 'Red Chili Powder', 'Salt'],
        features: ['✓ Premium paneer quality', '✓ Mint chutney stuffing', '✓ Extra protein', '✓ Crispy coating', '✓ Restaurant-style'],
        prepTime: '20 mins',
        rating: 4.7,
        reviews: 167
    },
];

function ProductDetail() {
    const { id } = useParams();
    const product = menuItems.find(item => item.id === parseInt(id));

    // State management
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [showNotification, setShowNotification] = useState(false);
    const [spiceLevel, setSpiceLevel] = useState('medium');

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

    // Related products (same category)
    const relatedProducts = menuItems
        .filter(item => item.category === product.category && item.id !== product.id)
        .slice(0, 4);

    // Product images (for demo, using emoji variations)
    const productImages = [product.image, '🥘', '🍽️'];

    // Add to Cart Handler
    const handleAddToCart = () => {
        const itemSpiceLevel = product.hot ? spiceLevel : null;
        addToCart(product, quantity, itemSpiceLevel);

        // Show notification
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    // Share handlers
    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Check out ${product.name} at Chatpati Delhi!`;

        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
        };

        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    };

    return (
        <div className="desi-product-page-wrapper">
            <Header />

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
                        <Link to="/#menu">Menu</Link>
                        <span className="breadcrumb-separator">›</span>
                        <span className="breadcrumb-category">{product.category}</span>
                        <span className="breadcrumb-separator">›</span>
                        <span className="breadcrumb-current">{product.name}</span>
                    </nav>

                    {/* Back to Menu Button */}
                    <Link to="/#menu" className="back-to-menu-btn">
                        ← Back to Menu
                    </Link>

                    <div className="desi-product-layout">
                        {/* Left: Product Image */}
                        <div className="desi-image-section">
                            <div className="desi-main-image">
                                <span className="desi-product-emoji">{productImages[selectedImage]}</span>
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
                                        {img}
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
                            {product.ingredients && (
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
                            {product.features && (
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
                            {product.prepTime && (
                                <div className="prep-time-badge">
                                    ⏱️ Preparation Time: <strong>{product.prepTime}</strong>
                                </div>
                            )}

                            {/* Spice Level Selector (only for spicy items) */}
                            {product.hot && (
                                <div className="spice-selector">
                                    <label className="spice-label">Choose Spice Level:</label>
                                    <div className="spice-options">
                                        <button
                                            className={`spice-btn ${spiceLevel === 'mild' ? 'active' : ''}`}
                                            onClick={() => setSpiceLevel('mild')}
                                        >
                                            🌱 Mild
                                        </button>
                                        <button
                                            className={`spice-btn ${spiceLevel === 'medium' ? 'active' : ''}`}
                                            onClick={() => setSpiceLevel('medium')}
                                        >
                                            🌶️ Medium
                                        </button>
                                        <button
                                            className={`spice-btn ${spiceLevel === 'hot' ? 'active' : ''}`}
                                            onClick={() => setSpiceLevel('hot')}
                                        >
                                            🔥 Extra Hot
                                        </button>
                                    </div>
                                </div>
                            )}

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
                            <div className="dietary-badges">
                                {product.vegetarian && <span className="badge veg">🥬 Vegetarian</span>}
                                {product.hot && <span className="badge spicy">🌶️ Spicy</span>}
                                <span className="badge fresh">✨ Fresh</span>
                            </div>

                            {/* Quantity Selector & Price */}
                            <div className="desi-price-section">
                                <div className="price-quantity">
                                    <div className="desi-price">{product.price}</div>
                                    <div className="quantity-selector">
                                        <label>Quantity:</label>
                                        <div className="quantity-controls">
                                            <button
                                                className="qty-btn"
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            >
                                                −
                                            </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                                min="1"
                                                max="99"
                                            />
                                            <button
                                                className="qty-btn"
                                                onClick={() => setQuantity(Math.min(99, quantity + 1))}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button className="desi-add-btn" onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
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
                                        <div className="related-image">{item.image}</div>
                                        <h3 className="related-name">{item.name}</h3>
                                        <div className="related-rating">
                                            {'⭐'.repeat(Math.floor(item.rating))} {item.rating}
                                        </div>
                                        <p className="related-price">{item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetail;
