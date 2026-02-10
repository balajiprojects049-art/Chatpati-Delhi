import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, menuItems } from '../data/menuData';
import { addToCart } from '../utils/cart';
import '../index.css';

function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartToast, setCartToast] = useState(false);

    const handleAddToCart = (item) => {
        addToCart(item, 1);
        setCartToast(true);
        setTimeout(() => setCartToast(false), 1800);
    };

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
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
                                    {item.image.startsWith('/') || item.image.startsWith('http') ? (
                                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <span className="product-emoji">{item.image}</span>
                                    )}
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{item.name}</h3>
                                    <p className="product-description">{item.description}</p>
                                    <div className="product-footer">
                                        <span className="product-price">{item.price}</span>
                                        <div className="product-actions">
                                            <Link to={`/product/${item.id}`} className="btn-view" style={{ width: '100%' }}>View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MenuPage;
