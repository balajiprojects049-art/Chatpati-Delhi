import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../utils/cart';
import '../index.css';

const SweetBoxPage = () => {
    const [cartToast, setCartToast] = useState(false);

    const handleAddToCart = (item) => {
        addToCart(item, 1);
        setCartToast(true);
        setTimeout(() => setCartToast(false), 2000);
    };

    const sweetBoxItems = [
        { id: 'sb-1', name: 'Assorted Sweet Box (Small)', price: '14.95', image: '/images/Sweets/Rasmalai.png', description: 'A delightful mix of our signature sweets. 500g.', category: 'Sweets' },
        { id: 'sb-2', name: 'Premium Gift Sweet Box (Large)', price: '24.95', image: '/images/Sweets/Gajar ka Halwa.png', description: 'Luxury sweet box perfect for gifting. 1kg.', category: 'Sweets' },
    ];

    return (
        <div className="sweet-box-page">
            {cartToast && <div className="cart-toast" style={{ background: '#2ecc71', color: 'white', position: 'fixed', top: '100px', right: '20px', padding: '15px 30px', borderRadius: '10px', zIndex: 9999, fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>✅ Added to Cart</div>}

            <section className="page-hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/hero-3.png')" }}>
                <div className="container">
                    <h1 className="page-hero-title">Custom Sweet Boxes</h1>
                    <p className="page-hero-subtitle">Handcrafted traditional sweets, packaged with love for your special occasions.</p>
                </div>
            </section>

            <section className="section sweet-menu-section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">Specially Curated</span>
                        <h2>Gift A Box of Happiness</h2>
                    </div>

                    <div className="product-grid">
                        {sweetBoxItems.map((item) => (
                            <div key={item.id} className="product-card">
                                <span className="badge-category" style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--primary-maroon)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', zIndex: 10, fontWeight: 'bold' }}>
                                    {item.category}
                                </span>
                                <div className="product-image">
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name" style={{ fontSize: '1.4rem' }}>{item.name}</h3>
                                    <p className="product-description">{item.description}</p>
                                    <div className="product-footer" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="product-price" style={{ color: 'var(--primary-maroon)', fontSize: '1.25rem', fontWeight: '800' }}>
                                            ${item.price}
                                        </span>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleAddToCart({ ...item, price: `$${item.price}` })}
                                            style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SweetBoxPage;
