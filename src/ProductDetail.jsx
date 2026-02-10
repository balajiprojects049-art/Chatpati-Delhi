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


                            {/* Quantity Selector & Price */}
                            <div className="desi-price-section">
                                <div className="price-quantity">
                                    <div className="desi-price">{product.price}</div>
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
