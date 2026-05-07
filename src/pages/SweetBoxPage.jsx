import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../utils/cart';
import '../index.css';

const SweetBoxPage = () => {
    const [selectedSweets, setSelectedSweets] = useState([]);

    const toggleSweet = (sweetName) => {
        setSelectedSweets(prev => 
            prev.includes(sweetName) 
                ? prev.filter(s => s !== sweetName) 
                : [...prev, sweetName]
        );
    };

    const handleInquiry = () => {
        if (selectedSweets.length === 0) return;
        const sweetList = selectedSweets.map(s => `• ${s}`).join('\n');
        const message = `Namaste! I want to create a custom sweet box with the following selections:\n\n${sweetList}\n\nPlease let me know the pricing and options for a custom box.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/17329601887?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="sweet-box-page">
            <section className="page-hero" style={{ backgroundImage: "url('/images/hero-sweets.png')" }}>
                <div className="container">
                    <h1 className="page-hero-title">Custom Sweet Boxes</h1>
                    <p className="page-hero-subtitle">Handcrafted traditional sweets, packaged with love for your special occasions.</p>
                </div>
            </section>

            {/* Detailed Sweets Menu Section */}
            <section className="section sweets-list-section" style={{ background: 'var(--cream)', padding: '6rem 0', marginBottom: selectedSweets.length > 0 ? '100px' : '0' }}>
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">Explore Our Range</span>
                        <h2>Select Your Favorites</h2>
                        <p style={{ maxWidth: '700px', margin: '1rem auto', color: 'var(--gray)' }}>
                            Choose the sweets you'd like to include in your custom box and enquire for a quote.
                        </p>
                    </div>

                    <div className="sweets-menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        {Object.entries(sweetMenuData).map(([category, items]) => (
                            <div key={category} className="sweet-category-card" style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--primary-maroon)' }}>
                                <h3 style={{ color: 'var(--primary-maroon)', borderBottom: '1px solid var(--accent-gold)', paddingBottom: '0.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                                    {category}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
                                    {items.map((sweet, index) => {
                                        const isSelected = selectedSweets.includes(sweet);
                                        return (
                                            <li 
                                                key={index} 
                                                style={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    gap: '0.75rem', 
                                                    color: isSelected ? 'var(--primary-maroon)' : 'var(--black)', 
                                                    fontSize: '1rem',
                                                    cursor: 'pointer',
                                                    padding: '4px 0',
                                                    transition: 'all 0.2s ease',
                                                    fontWeight: isSelected ? '600' : '400'
                                                }}
                                                onClick={() => toggleSweet(sweet)}
                                            >
                                                <div style={{ 
                                                    width: '22px', 
                                                    height: '22px', 
                                                    border: `2px solid ${isSelected ? 'var(--primary-maroon)' : 'var(--accent-gold)'}`, 
                                                    borderRadius: '4px', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    background: isSelected ? 'var(--primary-maroon)' : 'transparent',
                                                    color: 'white',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.2s ease',
                                                    flexShrink: 0
                                                }}>
                                                    {isSelected ? '✓' : ''}
                                                </div>
                                                {sweet}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Floating Inquiry Bar */}
            {selectedSweets.length > 0 && (
                <div style={{ 
                    position: 'fixed', 
                    bottom: '20px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    background: 'var(--primary-maroon)', 
                    color: 'white', 
                    padding: '1rem 2rem', 
                    borderRadius: '50px', 
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '2rem', 
                    zIndex: 1000,
                    width: 'max-content',
                    maxWidth: '90vw'
                }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                        {selectedSweets.length} Sweets Selected
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button 
                            onClick={() => setSelectedSweets([])} 
                            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '0.5rem 1rem', borderRadius: '25px', cursor: 'pointer' }}
                        >
                            Clear
                        </button>
                        <button 
                            onClick={handleInquiry} 
                            style={{ background: 'var(--accent-gold)', border: 'none', color: 'var(--primary-maroon)', padding: '0.5rem 1.5rem', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            )}
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
