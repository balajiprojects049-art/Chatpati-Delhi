import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Original styles for the hero section
import './Royal.css'; // Import the new royal styling

// Counter Component for animated numbers
function Counter({ end, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
}

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [reviewSlide, setReviewSlide] = useState(0);

    const heroSlides = [
        {
            tag: "🏆 Award Winning",
            title: "Authentic",
            titleAccent: "Delhi Street Food",
            subtitle: "Experience the vibrant flavors of Delhi's finest chaats and traditional dishes, crafted with passion.",
            img: "/images/hero-1.png",
            highlight: "Chole Bhature",
            highlightImg: "/images/Snacks/Chole Bhature.png"
        },
        {
            tag: "❤️ Served With Love",
            title: "Every Bite,",
            titleAccent: "A Delhi Story",
            subtitle: "Every dish prepared with care and passion by our expert chefs, keeping alive the tradition.",
            img: "/images/hero-2.png",
            highlight: "Raj Kachori",
            highlightImg: "/images/Raj Kachori.png"
        },
        {
            tag: "✨ 120+ Menu Items",
            title: "Taste the",
            titleAccent: "Magic of Delhi",
            subtitle: "From traditional chaats to royal thalis — over 120 authentic items to satisfy every craving.",
            img: "/images/hero-3.png",
            highlight: "Purani Delhi Biryani",
            highlightImg: "/images/Biriyani/Purani Delhi Chicken Biryani.png"
        }
    ];

    const stats = [
        { value: 5000, suffix: '+', label: 'Happy Customers' },
        { value: 120, suffix: '+', label: 'Royal Dishes' },
        { value: 5, suffix: '.0', label: 'Google Rating' },
        { value: 10, suffix: '+', label: 'Years of Legacy' },
    ];

    const realReviews = [
        {
            name: 'Shilpi P.',
            source: 'Google Review',
            text: '5 stars! The weather was perfect—snowy, cold, and damp, which made the authentic, fresh flavors and spices at Chatpati Delhi taste even better. It was a perfect flavor tango. Highly recommend!',
            rating: 5
        },
        {
            name: 'Malou C.',
            source: 'Google Review',
            text: 'Boy, was the food worth the wait. Dishes came out fast and everything we tried had great balance of sour, sweet, spice and freshness. Most striking was the customer service. 11/10 would recommend!',
            rating: 5
        },
        {
            name: 'Rohith K.',
            source: 'Google Review',
            text: "Want to say it's hard to find a fault with this restaurant. Everything is so damn good! Outside definitely ask the waiters for their recommendations as all of them are spot on.",
            rating: 5
        }
    ];

    // Auto slide hero
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    // Auto slide reviews
    useEffect(() => {
        const timer = setInterval(() => {
            setReviewSlide((prev) => (prev + 1) % realReviews.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [realReviews.length]);

    return (
        <div className="royal-page">
            
            {/* --- HERO SECTION (Original Split Layout) --- */}
            <section className="hero-section">
                {/* Background images with Ken Burns effect */}
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-bg-layer ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url('${slide.img}')` }}
                    />
                ))}

                {/* Dark cinematic overlay */}
                <div className="hero-overlay" />

                {/* Content */}
                <div className="hero-inner container">
                    {/* LEFT: Text content */}
                    <div className="hero-text-col">
                        <div className="hero-tag">
                            {heroSlides[currentSlide].tag}
                        </div>

                        <h1 className="hero-heading">
                            <span className="hero-heading-main">{heroSlides[currentSlide].title}</span>
                            <br />
                            <span className="hero-heading-accent">{heroSlides[currentSlide].titleAccent}</span>
                        </h1>

                        <p className="hero-desc">{heroSlides[currentSlide].subtitle}</p>

                        <div className="hero-social-proof">
                            <div className="hero-stars">⭐⭐⭐⭐⭐ <span>5.0 on Google</span></div>
                            <div className="hero-divider-dot" />
                            <div className="hero-review-count">5,000+ Happy Customers</div>
                        </div>

                        <div className="hero-cta-row">
                            <Link to="/menu" className="hero-btn-primary">
                                <span>Explore Menu</span>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                            <Link to="/contact" className="hero-btn-ghost">Book a Table</Link>
                        </div>

                        <div className="hero-dots">
                            {heroSlides.map((_, i) => (
                                <button
                                    key={i}
                                    className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(i)}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Floating food card */}
                    <div className="hero-visual-col">
                        <div className="hero-food-card">
                            <div className="hero-food-card-img">
                                <img
                                    src={heroSlides[currentSlide].highlightImg}
                                    alt={heroSlides[currentSlide].highlight}
                                />
                            </div>
                            <div className="hero-food-card-info">
                                <span className="hero-food-card-label">Today's Special</span>
                                <h3 className="hero-food-card-name">{heroSlides[currentSlide].highlight}</h3>
                                <Link to="/menu" className="hero-food-card-cta">Order Now →</Link>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div className="hero-badge hero-badge-nyt">
                            <span className="badge-emoji">🏆</span>
                            <div>
                                <div className="badge-title">NYT Top 50</div>
                                <div className="badge-sub">Best Indian Restaurant</div>
                            </div>
                        </div>

                        <div className="hero-badge hero-badge-rating">
                            <span className="badge-emoji">⭐</span>
                            <div>
                                <div className="badge-title">5.0 Rating</div>
                                <div className="badge-sub">Google Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="hero-scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-mouse"><div className="scroll-wheel" /></div>
                </div>
            </section>

            {/* --- ROYAL STATS --- */}
            <section className="royal-section" style={{ padding: '2.5rem 1rem', background: '#080503', borderTop: '1px solid rgba(212, 175, 55, 0.1)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="royal-stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="royal-stat-card">
                            <div className="royal-stat-value">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="royal-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- HERITAGE / ABOUT SECTION --- */}
            <section className="royal-section">
                <div className="royal-about">
                    <div className="royal-about-img-wrapper">
                        <img src="/images/hero-1.png" alt="Royal Cooking" className="royal-about-img" />
                    </div>
                    <div className="royal-about-text">
                        <div className="royal-title-container" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            <span className="royal-subtitle">Our Heritage</span>
                            <h2 className="royal-title">The Culinary Legacy</h2>
                            <div className="royal-title-divider" style={{ justifyContent: 'flex-start' }}>
                                <span>✦</span>
                            </div>
                        </div>
                        <p>
                            At Chatpati Delhi, we believe that food is not just a meal, but a grand celebration of culture, history, and royal traditions. Rooted in the bustling streets and majestic palaces of Old Delhi, our recipes have been passed down through generations.
                        </p>
                        <p>
                            We meticulously source the finest spices and ingredients, ensuring that every dish we serve is a masterpiece of flavor, crafted with unwavering dedication and passion.
                        </p>
                        <div className="royal-signature">Chatpati Delhi</div>
                    </div>
                </div>
            </section>

            {/* --- ROYAL FEATURES --- */}
            <section className="royal-section" style={{ background: 'linear-gradient(to bottom, #0b0705, #140d0a)' }}>
                <div className="royal-title-container">
                    <span className="royal-subtitle">The Royal Standard</span>
                    <h2 className="royal-title">Why Choose Us</h2>
                    <div className="royal-title-divider">
                        <span>✦</span>
                    </div>
                </div>
                <div className="royal-features">
                    <div className="royal-feature-card">
                        <span className="royal-feature-icon">👑</span>
                        <h3 className="royal-feature-title">Premium Ingredients</h3>
                        <p className="royal-feature-desc">We use only the finest, hand-picked ingredients and exotic spices to ensure an unparalleled dining experience.</p>
                    </div>
                    <div className="royal-feature-card">
                        <span className="royal-feature-icon">✨</span>
                        <h3 className="royal-feature-title">Authentic Recipes</h3>
                        <p className="royal-feature-desc">Our recipes are closely guarded secrets, preserving the true essence and authenticity of Delhi's royal kitchens.</p>
                    </div>
                    <div className="royal-feature-card">
                        <span className="royal-feature-icon">🥂</span>
                        <h3 className="royal-feature-title">Elegant Ambiance</h3>
                        <p className="royal-feature-desc">Experience a sophisticated atmosphere where impeccable service meets a warm, welcoming environment.</p>
                    </div>
                </div>
            </section>

            {/* --- SIGNATURE DISHES --- */}
            <section className="royal-section">
                <div className="royal-title-container">
                    <span className="royal-subtitle">Chef's Masterpieces</span>
                    <h2 className="royal-title">Signature Delicacies</h2>
                    <div className="royal-title-divider">
                        <span>✦</span>
                    </div>
                </div>
                <div className="royal-menu-grid">
                    <div className="royal-menu-card">
                        <div className="royal-menu-img-wrap">
                            <img src="/images/Snacks/Chole Bhature.png" alt="Chole Bhature" />
                        </div>
                        <div className="royal-menu-info">
                            <div>
                                <h3 className="royal-menu-title">Royal Chole Bhature</h3>
                                <p className="royal-menu-desc">Golden, fluffy bhaturas served with a deeply spiced, rich chana masala. A timeless classic.</p>
                            </div>
                            <div className="royal-btn-group" style={{ marginTop: '1rem' }}>
                                <Link to="/menu" className="royal-btn" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Discover</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="royal-menu-card">
                        <div className="royal-menu-img-wrap">
                            <img src="/images/Raj Kachori.png" alt="Raj Kachori" />
                        </div>
                        <div className="royal-menu-info">
                            <div>
                                <h3 className="royal-menu-title">Majestic Raj Kachori</h3>
                                <p className="royal-menu-desc">The undisputed king of chaats, adorned with sweet yogurt, zesty chutneys, and premium spices.</p>
                            </div>
                            <div className="royal-btn-group" style={{ marginTop: '1rem' }}>
                                <Link to="/menu" className="royal-btn" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Discover</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="royal-menu-card">
                        <div className="royal-menu-img-wrap">
                            <img src="/images/Biriyani/Purani Delhi Chicken Biryani.png" alt="Chicken Biryani" />
                        </div>
                        <div className="royal-menu-info">
                            <div>
                                <h3 className="royal-menu-title">Nizami Chicken Biryani</h3>
                                <p className="royal-menu-desc">Aromatic long-grain basmati rice slow-cooked with tender chicken and saffron-infused spices.</p>
                            </div>
                            <div className="royal-btn-group" style={{ marginTop: '1rem' }}>
                                <Link to="/menu" className="royal-btn" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Discover</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link to="/menu" className="royal-btn royal-btn-outline">View Full Menu</Link>
                </div>
            </section>

            {/* --- ROYAL BANQUET / CATERING --- */}
            <section className="royal-section">
                <div className="royal-banquet">
                    <div className="royal-banquet-img"></div>
                    <div className="royal-banquet-content">
                        <span className="royal-subtitle">Grand Celebrations</span>
                        <h2 className="royal-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>Royal Banquets & Catering</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Elevate your special occasions with our premium catering services. From intimate gatherings to grand weddings, we bring the majestic flavors of Delhi's streets and palaces straight to your event, complete with live food stalls and bespoke menus.
                        </p>
                        <ul style={{ listStyle: 'none', color: '#D4AF37', marginBottom: '2.5rem', padding: 0 }}>
                            <li style={{ marginBottom: '10px' }}>✦ Live Chaat Counters</li>
                            <li style={{ marginBottom: '10px' }}>✦ Custom Thali Menus</li>
                            <li style={{ marginBottom: '10px' }}>✦ Royal Sweets & Desserts</li>
                        </ul>
                        <Link to="/contact" className="royal-btn">Enquire Now</Link>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS --- */}
            <section className="royal-section" style={{ background: 'url("/images/hero-2.png") center/cover fixed' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(11, 7, 5, 0.9)' }} />
                
                <div className="royal-title-container">
                    <span className="royal-subtitle">Words of Praise</span>
                    <h2 className="royal-title">Guest Experiences</h2>
                    <div className="royal-title-divider">
                        <span>✦</span>
                    </div>
                </div>
                
                <div className="royal-reviews">
                    <div className="royal-reviews-container">
                        {realReviews.map((review, index) => (
                            <div 
                                key={index} 
                                className={`royal-review-slide ${index === reviewSlide ? 'active' : ''}`}
                            >
                                <div className="royal-review-card">
                                    <div className="royal-quote-icon">"</div>
                                    <div className="royal-review-stars">
                                        {'★'.repeat(review.rating)}
                                    </div>
                                    <p className="royal-review-text">{review.text}</p>
                                    <div className="royal-review-author-box">
                                        <div className="royal-review-avatar">{review.name.charAt(0)}</div>
                                        <div>
                                            <div className="royal-review-author">{review.name}</div>
                                            <div className="royal-review-source">{review.source}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="royal-review-dots">
                        {realReviews.map((_, i) => (
                            <button
                                key={i}
                                className={`royal-review-dot ${i === reviewSlide ? 'active' : ''}`}
                                onClick={() => setReviewSlide(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VISIT US --- */}
            <section className="royal-section">
                <div className="royal-title-container">
                    <span className="royal-subtitle">Experience The Magic</span>
                    <h2 className="royal-title">Visit Chatpati Delhi</h2>
                    <div className="royal-title-divider">
                        <span>✦</span>
                    </div>
                </div>
                
                <div className="royal-visit-container">
                    <div className="royal-visit-info">
                        <div className="visit-block">
                            <h3 className="visit-title">Location</h3>
                            <p>123 Royal Spice Avenue, <br />Old Delhi Culinary District <br />New Delhi, 110006</p>
                        </div>
                        <div className="visit-block">
                            <h3 className="visit-title">Opening Hours</h3>
                            <p><strong>Mon - Fri:</strong> 11:00 AM - 10:30 PM<br />
                            <strong>Sat - Sun:</strong> 10:00 AM - 11:30 PM</p>
                        </div>
                        <div className="visit-block">
                            <h3 className="visit-title">Reservations</h3>
                            <p>Phone: +91 98765 43210<br />
                            Email: bookings@chatpatidelhi.com</p>
                        </div>
                        <Link to="/contact" className="royal-btn">Get Directions</Link>
                    </div>
                    <div className="royal-visit-map">
                        <div className="map-placeholder">
                            <img src="/images/hero-3.png" alt="Chatpati Delhi Location" />
                            <div className="map-overlay">
                                <span>Find Us on Maps</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ROYAL NEWSLETTER --- */}
            <section className="royal-section" style={{ paddingBottom: '8rem' }}>
                <div className="royal-newsletter">
                    <span className="royal-subtitle">Join The Court</span>
                    <h2 className="royal-title" style={{ fontSize: '2.2rem', margin: '1rem 0' }}>The Royal Club</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
                        Subscribe to receive exclusive invitations to private tasting events, secret menu drops, and our monthly dispatch.
                    </p>
                    <div className="royal-input-group">
                        <input type="email" placeholder="Enter your email address" className="royal-input" />
                        <button className="royal-btn">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;

