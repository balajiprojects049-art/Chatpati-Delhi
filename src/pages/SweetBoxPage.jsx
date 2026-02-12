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

            <section className="page-hero" style={{ backgroundImage: "url('/images/hero-sweets.png')" }}>
                <div className="container">
                    <h1 className="page-hero-title">Custom Sweet Boxes</h1>
                    <p className="page-hero-subtitle">Handcrafted traditional sweets, packaged with love for your special occasions.</p>
                </div>
            </section>



            {/* Detailed Sweets Menu Section */}
            <section className="section sweets-list-section" style={{ background: 'var(--cream)', padding: '6rem 0' }}>
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">Explore Our Range</span>
                        <h2>All The Sweets Varieties</h2>
                        <p style={{ maxWidth: '700px', margin: '1rem auto', color: 'var(--gray)' }}>
                            Customize your box with any of these fresh, authentic delights.
                        </p>
                    </div>

                    <div className="sweets-menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
                        {Object.entries(sweetMenuData).map(([category, items]) => (
                            <div key={category} className="sweet-category-card" style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--primary-maroon)' }}>
                                <h3 style={{ color: 'var(--primary-maroon)', borderBottom: '1px solid var(--accent-gold)', paddingBottom: '0.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                                    {category}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
                                    {items.map((sweet, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--black)', fontSize: '1rem' }}>
                                            <span style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}>•</span>
                                            {sweet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Sweets Menu Data
const sweetMenuData = {
    "Bengali Sweets": [
        "Malai Roll", "Pakiza", "Pista Sandwich", "Rose Sandwich",
        "Pineapple Cham Cham", "Rose Cham Cham", "Yellow Cham Cham", "Malai Cham Cham",
        "Malai Chop", "Pista Kali", "Badam Kali", "Badam Pista Kali",
        "Anarkali", "Malai Jamun", "Kala Malai Jamun"
    ],
    "Dry Sweets": [
        "Motichoor Laddu", "Dry Fruit Laddu", "Besan Laddu", "Milk Cake",
        "Kalakand", "Anjeer Roll", "Anjeer Barfi", "Dodha Barfi",
        "Rose Barfi", "Coconut Barfi", "Chocolate Barfi", "Koya Pista Barfi",
        "Melon Ball", "Kaju Apple", "Kaju Katli", "Kaju Pista Roll",
        "Kaju Kalash", "Indradhanush Barfi", "Kaju Paan", "Pista Paan",
        "Malai", "Badam Masala", "Pista", "Kaju Masala"
    ],
    "Namkeen & Savories": [
        "Namkeen Mixture", "Namak Para", "Shakar Para"
    ],
    "Desserts": [
        "Moongdal Halwa", "Gajar Halwa", "Gulab Jamun", "Kala Gulab Jamun",
        "Malpua Rabdi", "Brownie Rabdi", "Jalebi Rabdi", "Rasmalai",
        "Chenna Pie", "Rajbhog", "Malai Kulfi", "Kulfi Falooda"
    ]
};

export default SweetBoxPage;
