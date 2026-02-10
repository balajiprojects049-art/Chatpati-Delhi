import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto slide hero
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const heroSlides = [
        {
            title: "Authentic Delhi Street Food",
            subtitle: "Experience the vibrant flavors of Delhi's finest chaats and traditional dishes",
            bg: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/hero-1.png')"
        },
        {
            title: "Food Served With Love",
            subtitle: "Every dish prepared with care and passion by our expert chefs",
            bg: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/hero-2.png')"
        },
        {
            title: "Over 50 Delicious Items",
            subtitle: "From traditional chaats to royal thalis - taste the magic of Delhi",
            bg: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/hero-3.png')"
        }
    ];

    const stats = [
        { icon: '👥', value: '5000+', label: 'Happy Customers' },
        { icon: '⭐', value: '99%', label: 'Quality Score' },
        { icon: '📅', value: '10+ Years', label: 'Of Excellence' },
        { icon: '🍽️', value: '120+', label: 'Menu Items' },
    ];

    const testimonials = [
        { name: 'Rahul S.', text: 'Best chaat in town! Tastes just like Delhi street food.', rating: 5 },
        { name: 'Priya M.', text: 'The thalis are amazing! Feels like home-cooked food.', rating: 5 },
        { name: 'Amit K.', text: 'Authentic flavors and great service. Highly recommended!', rating: 5 },
    ];

    return (
        <div className="home-page">
            {/* Hero Slider */}
            <section className="hero-slider">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ background: slide.bg }}
                    >
                        <div className="hero-content">
                            <h1 className="hero-title">{slide.title}</h1>
                            <p className="hero-subtitle">{slide.subtitle}</p>
                            <div className="hero-buttons">
                                <Link to="/menu" className="btn btn-primary">View Menu</Link>
                                <Link to="/about" className="btn btn-secondary">About Us</Link>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="slider-dots">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section values-section">
                <div className="container">
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Quality First</h3>
                            <p>We never compromise on quality. Every dish is carefully prepared and inspected.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3>Customer Care</h3>
                            <p>Your satisfaction is our priority. We serve you with dedication and honesty.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌱</div>
                            <h3>Sustainability</h3>
                            <p>We support eco-friendly practices and use fresh, quality ingredients.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Customers Say</h2>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((review, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="stars">{'⭐'.repeat(review.rating)}</div>
                                <p className="testimonial-text">"{review.text}"</p>
                                <p className="testimonial-author">— {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
