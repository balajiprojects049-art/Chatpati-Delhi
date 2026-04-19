import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const TrayOrdersPage = () => {
    const [selectedSize, setSelectedSize] = useState('small');

    const traySizes = [
        {
            id: 'small',
            name: 'Small Tray',
            capacity: '12 to 15 Peoples',
            description: 'Perfect for intimate family gatherings and small office lunches.',
            icon: '🍱'
        },
        {
            id: 'large',
            name: 'Large Tray',
            capacity: '18 to 25 Peoples',
            description: 'Ideal for parties, celebrations, and corporate events.',
            icon: '🥘'
        }
    ];

    const menuOptions = [
        {
            category: 'Signature Thalis',
            items: [
                { name: 'C.P.D Veg Thali', description: 'Assorted seasonal vegetables, dal, rice, and bread.', image: "/images/Thali's/C.P.D. Veg Thali.png" },
                { name: 'Non-Veg Thali', description: 'Traditional chicken curry, seasonal veg, dal, and rice.', image: "/images/Thali's/C.P.D. Chicken Thali1.png" }
            ]
        },
        {
            category: 'Main Course Specialties',
            items: [
                { name: 'Butter Chicken', description: 'Tender chicken pieces in a rich, creamy tomato gravy.', image: '/images/Tadka Marke/Butter Chicken.png' },
                { name: 'Paneer Makhanwala', description: 'Cubes of cottage cheese in a velvety butter sauce.', image: '/images/Tadka Marke/Paneer Makhanwala.png' }
            ]
        },
        {
            category: 'Biryani Excellence',
            items: [
                { name: 'Purani Delhi Chicken Biryani', description: 'Aromatic basmati rice cooked with succulent chicken and secret spices.', image: '/images/Biriyani/Purani Delhi Chicken Biryani.png' },
                { name: 'Tarkari Biryani (Veg)', description: 'Fragrant rice layered with garden fresh vegetables.', image: '/images/Biriyani/Tarkari Biryani (Veg).png' }
            ]
        },
        {
            category: 'Sweet Endings',
            items: [
                { name: 'Rasmalai', description: 'Soft cheese patties soaked in thickened, sweetened milk.', image: '/images/Sweets/Rasmalai.png' },
                { name: 'Gajar Ka Halwa', description: 'Traditional slow-cooked carrot pudding with dry fruits.', image: '/images/Sweets/Gajar ka Halwa.png' }
            ]
        },
        {
            category: 'Refreshing Drinks',
            items: [
                { name: 'Aam Ki Lassi', description: 'Premium mango yogurt smoothie.', image: '/images/Drinks/Aam Ki Lassi.jpg' },
                { name: 'Jal Jeera Soda', description: 'Tangy and spiced traditional cumin refresher.', image: '/images/Jal Jeera Soda.jpg' }
            ]
        }
    ];

    return (
        <div className="tray-orders-page">
            <section className="page-hero" style={{ backgroundImage: "url('/images/hero-3.png')", height: '400px' }}>
                <div className="container">
                    <h1 className="page-hero-title">Tray Orders</h1>
                    <p className="page-hero-subtitle">Authentic Delhi Flavors, Perfectly Portioned for Your Group</p>
                </div>
            </section>

            <section className="section container">
                <div className="section-title">
                    <span className="section-subtitle">Choose Your Scale</span>
                    <h2>Select Tray Size</h2>
                </div>

                <div className="about-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {traySizes.map((size) => (
                        <div 
                            key={size.id} 
                            className={`about-card ${selectedSize === size.id ? 'active' : ''}`}
                            onClick={() => setSelectedSize(size.id)}
                            style={{ 
                                cursor: 'pointer', 
                                border: selectedSize === size.id ? '2px solid var(--accent-gold)' : '2px solid transparent',
                                transition: 'all 0.3s ease',
                                transform: selectedSize === size.id ? 'translateY(-5px)' : 'none'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{size.icon}</div>
                            <h3>{size.name}</h3>
                            <div style={{ color: 'var(--primary-maroon)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                {size.capacity}
                            </div>
                            <p>{size.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">Tray Menu Options</span>
                        <h2>Included Delicacies</h2>
                        <p>Each tray package is carefully curated with our signature dishes</p>
                    </div>

                    {menuOptions.map((opt, idx) => (
                        <div key={idx} style={{ marginBottom: '4rem' }}>
                            <h3 style={{ borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '2rem', color: 'var(--primary-maroon)' }}>
                                {opt.category}
                            </h3>
                            <div className="product-grid">
                                {opt.items.map((item, i) => (
                                    <div key={i} className="product-card">
                                        <div className="product-image">
                                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="product-info">
                                            <h4 className="product-name">{item.name}</h4>
                                            <p className="product-description">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Inquire for Tray Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrayOrdersPage;
