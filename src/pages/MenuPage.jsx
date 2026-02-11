import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, menuItems } from '../data/menuData';
import { addToCart } from '../utils/cart';
import '../index.css';
import '../dietary.css';


function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartToast, setCartToast] = useState(false);
    const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all', 'veg', 'non-veg'
    const [sizzlingFilter, setSizzlingFilter] = useState('all'); // 'all', 'veg', 'non-veg' for sizzling section

    const handleAddToCart = (item) => {
        addToCart(item, 1);
        setCartToast(true);
        setTimeout(() => setCartToast(false), 1800);
    };

    const isVeg = (item) => {
        if (item.veg !== undefined) return item.veg;
        // Infer from name if not explicitly defined
        const nonVegKeywords = ['chicken', 'goat', 'lamb', 'fish', 'egg', 'keema', 'mutton', 'prawn', 'non veg', 'non-veg'];
        const lowerName = item.name.toLowerCase();
        const lowerDesc = item.description ? item.description.toLowerCase() : '';

        return !nonVegKeywords.some(keyword => lowerName.includes(keyword) || lowerDesc.includes(keyword));
    };

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesDietary = true;
        if (dietaryFilter === 'veg') {
            matchesDietary = isVeg(item);
        } else if (dietaryFilter === 'non-veg') {
            matchesDietary = !isVeg(item);
        }

        return matchesCategory && matchesSearch && matchesDietary;
    });

    return (
        <div className="menu-page">
            {cartToast && <div className="cart-toast">✅ Added to cart</div>}

            <section className="section menu-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Delicious Menu</h2>
                        <p className="section-description">
                            Explore our wide variety of authentic Delhi street food and traditional dishes
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="search-container">
                        <div className="search-wrapper">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search for dishes (e.g. Samosa, Biryani)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
                            )}
                        </div>
                    </div>

                    {/* Dietary Filters */}
                    <div className="dietary-filters">
                        <button
                            className={`dietary-btn ${dietaryFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setDietaryFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`dietary-btn veg ${dietaryFilter === 'veg' ? 'active' : ''}`}
                            onClick={() => setDietaryFilter('veg')}
                        >
                            Veg
                        </button>
                        <button
                            className={`dietary-btn non-veg ${dietaryFilter === 'non-veg' ? 'active' : ''}`}
                            onClick={() => setDietaryFilter('non-veg')}
                        >
                            Non-Veg
                        </button>
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

                    {/* Products Grouped by Category */}
                    <div>
                        {/* Get unique categories from filtered items */}
                        {Array.from(new Set(filteredItems.map(item => item.category))).map(categorySlug => {
                            const categoryName = categories.find(cat => cat.id === categorySlug)?.name || categorySlug;
                            let categoryItems = filteredItems.filter(item => item.category === categorySlug);

                            // Special filter for 'sizzling' category
                            if (categorySlug === 'sizzling' && sizzlingFilter !== 'all') {
                                categoryItems = categoryItems.filter(item => {
                                    if (sizzlingFilter === 'veg') return isVeg(item);
                                    if (sizzlingFilter === 'non-veg') return !isVeg(item);
                                    return true;
                                });
                            }

                            if (categoryItems.length === 0 && sizzlingFilter === 'all') return null;

                            return (
                                <div key={categorySlug} className="category-section" style={{ marginBottom: '3rem' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderBottom: '2px solid #eee',
                                        paddingBottom: '0.5rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <h3 className="category-title" style={{
                                            fontSize: '1.8rem',
                                            color: '#8B1538',
                                            marginBottom: 0,
                                            textTransform: 'capitalize'
                                        }}>
                                            {categoryName}
                                        </h3>

                                        {/* Local Filter for Sizzling Section */}
                                        {categorySlug === 'sizzling' && (
                                            <div className="sizzling-filter" style={{ display: 'flex', gap: '10px' }}>
                                                <button
                                                    onClick={() => setSizzlingFilter('all')}
                                                    style={{
                                                        padding: '5px 15px',
                                                        borderRadius: '20px',
                                                        border: '1px solid #ddd',
                                                        background: sizzlingFilter === 'all' ? '#333' : 'white',
                                                        color: sizzlingFilter === 'all' ? 'white' : '#333',
                                                        cursor: 'pointer',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >All</button>
                                                <button
                                                    onClick={() => setSizzlingFilter('veg')}
                                                    style={{
                                                        padding: '5px 15px',
                                                        borderRadius: '20px',
                                                        border: '1px solid #2ecc71',
                                                        background: sizzlingFilter === 'veg' ? '#2ecc71' : 'white',
                                                        color: sizzlingFilter === 'veg' ? 'white' : '#2ecc71',
                                                        cursor: 'pointer',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >Veg</button>
                                                <button
                                                    onClick={() => setSizzlingFilter('non-veg')}
                                                    style={{
                                                        padding: '5px 15px',
                                                        borderRadius: '20px',
                                                        border: '1px solid #e74c3c',
                                                        background: sizzlingFilter === 'non-veg' ? '#e74c3c' : 'white',
                                                        color: sizzlingFilter === 'non-veg' ? 'white' : '#e74c3c',
                                                        cursor: 'pointer',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >Non-Veg</button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="product-grid">
                                        {categoryItems.map((item) => (
                                            <div key={item.id} className="product-card">
                                                {item.hot && <span className="badge-hot">Hot</span>}
                                                <div className={isVeg(item) ? "veg-symbol" : "non-veg-symbol"}></div>
                                                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <div className="product-image">
                                                        {item.image.startsWith('/') || item.image.startsWith('http') ? (
                                                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        ) : (
                                                            <span className="product-emoji">{item.image}</span>
                                                        )}
                                                    </div>
                                                    <div className="product-info">
                                                        <h3 className="product-name">{item.name}</h3>
                                                        <p className="product-description" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                                        <div className="product-footer">
                                                            <span className="product-price">{item.price}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="product-actions" style={{ padding: '0 1rem 1rem' }}>
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ width: '100%', padding: '0.6rem' }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleAddToCart(item);
                                                        }}
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MenuPage;
