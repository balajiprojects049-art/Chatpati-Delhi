import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const LiveStationsPage = () => {
    const stations = [
        {
            id: 'ls-1',
            name: 'Golgappe Live Station',
            description: 'The ultimate interactive street food experience. Our expert servers provide fresh, crispy puris with multiple flavored waters.',
            features: ['Live Interaction', 'Custom Spice Levels', 'Variety of Pani'],
            image: '/images/golgappa.jpeg'
        },
        {
            id: 'ls-2',
            name: 'Karjat Vada Pav Stall',
            description: 'Authentic Mumbai street vibes with hot, fresh vadas served in buttery pav with traditional chutneys.',
            features: ['Hot & Fresh', 'Traditional Chutneys', 'Authentic Taste'],
            image: '/images/Mumbai Local/Karjat Vada Pav.png'
        },
        {
            id: 'ls-3',
            name: 'Live Chatpati Chaat',
            description: 'Customized Papri Chaat and Sev Puri made exactly to your guests\' preference.',
            features: ['Made-to-Order', 'Fresh Ingredients', 'Visual Appeal'],
            image: '/images/Chandni Chowk Ke Bhalle.png'
        }
    ];

    return (
        <div className="live-stations-page">
            <section className="page-hero" style={{ backgroundImage: "url('/images/hero-1.png')", height: '400px' }}>
                <div className="container">
                    <h1 className="page-hero-title">Live Food Stations</h1>
                    <p className="page-hero-subtitle">Bring the Vibrant Street Markets of Delhi to Your Event</p>
                </div>
            </section>

            <section className="section container">
                <div className="section-title">
                    <span className="section-subtitle">Interactive Dining</span>
                    <h2>Experience the Magic</h2>
                    <p>Our live stations add a touch of spectacle and ultimate freshness to any occasion.</p>
                </div>

                <div className="live-stations-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', marginTop: '4rem' }}>
                    {stations.map((station, idx) => (
                        <div 
                            key={station.id} 
                            style={{ 
                                display: 'flex', 
                                flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                                gap: '3rem',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                                    <img src={station.image} alt={station.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-maroon)', marginBottom: '1.5rem' }}>{station.name}</h3>
                                <p style={{ fontSize: '1.2rem', color: 'var(--gray)', marginBottom: '2rem', lineHeight: '1.8' }}>{station.description}</p>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {station.features.map((f, i) => (
                                        <li key={i} style={{ background: 'var(--cream)', padding: '0.6rem 1.2rem', borderRadius: '30px', fontWeight: 'bold', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)' }}>
                                            ✓ {f}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '2.5rem' }}>
                                    <Link to="/contact" className="btn btn-primary">Book This Station</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" style={{ background: 'var(--primary-maroon)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2>Ready to Wow Your Guests?</h2>
                    <p style={{ maxWidth: '800px', margin: '1.5rem auto 3rem', fontSize: '1.2rem', opacity: '0.9' }}>
                        Our live stations are highly customizable. Contact us to design a unique street food experience for your next event.
                    </p>
                    <Link to="/contact" className="btn btn-secondary" style={{ border: '2px solid white' }}>
                        Enquire Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LiveStationsPage;
