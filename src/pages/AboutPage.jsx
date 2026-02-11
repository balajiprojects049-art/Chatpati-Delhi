import '../index.css';

function AboutPage() {
    return (
        <div className="about-page">
            {/* Page Hero */}
            <section className="page-hero about-hero">
                <div className="container">
                    <h1 className="page-hero-title">Our Story & The People Behind It</h1>
                    <p className="page-hero-subtitle">Dedicated to bringing the authentic taste of Delhi to New Jersey since 2021.</p>
                </div>
            </section>

            {/* Premium Coming Soon Banner */}
            <section className="coming-soon-banner">
                <div className="container">
                    <div className="coming-soon-label">Coming Soon</div>
                    <div className="coming-soon-flex">
                        <div className="soon-service-item">
                            <span className="soon-dot"></span>
                            <span className="soon-service-name">Catering Services</span>
                        </div>
                        <div className="soon-service-item">
                            <span className="soon-dot"></span>
                            <span className="soon-service-name">Live Food Stalls</span>
                        </div>
                        <div className="soon-service-item">
                            <span className="soon-dot"></span>
                            <span className="soon-service-name">Sweets Bulk Orders</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Founders Section */}
            <section className="founders-section">
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">The Hands Behind the Taste</span>
                        <h2> Meet the Founders of Chatpati Delhi</h2>
                    </div>

                    <div className="founder-row">
                        <div className="founder-image">
                            <img src="/images/hema-singh.jpg" alt="Hema Singh" />
                        </div>
                        <div className="founder-content">
                            <div className="founder-header">
                                <h3> Hema Singh</h3>
                                <p className="founder-title">Founder & Culinary Creator</p>
                            </div>
                            <div className="founder-text">
                                <p>Hema Singh is the heart and soul of Chatpati Delhi. As the creative force behind our signature masalas and authentic recipes, she brings over 18 years of culinary experience rooted in tradition and passion.</p>
                                <p>Every spice blend, every aroma, and every flavor reflects her dedication to preserving authentic Indian taste while delivering unforgettable dining experiences.</p>
                                <blockquote className="founder-quote">“Food should feel like home.”</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="founder-row reverse">
                        <div className="founder-image">
                            <img src="/images/jimmy-poonamwala.jpg" alt="Jimmy Poonamwala" />
                        </div>
                        <div className="founder-content">
                            <div className="founder-header">
                                <h3> Jimmy Poonamwala</h3>
                                <p className="founder-title">Co-Founder & Operations Director</p>
                            </div>
                            <div className="founder-text">
                                <p>With over 18 years of experience in hospitality and restaurant management, Jimmy ensures that every guest at Chatpati Delhi feels valued and welcomed.</p>
                                <p>As the operational backbone of the restaurant, he manages daily operations, team leadership, and service excellence. His focus on quality, consistency, and customer satisfaction keeps the restaurant running smoothly every single day.</p>
                                <blockquote className="founder-quote">“Hospitality is not a service — it’s a responsibility.”</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="founder-row">
                        <div className="founder-image">
                            <img src="/images/abhijith-pingle.jpg" alt="Abhijith Pingle" />
                        </div>
                        <div className="founder-content">
                            <div className="founder-header">
                                <h3> Abhijith Pingle</h3>
                                <p className="founder-title">Catering Director – Nationwide Operations</p>
                            </div>
                            <div className="founder-text">
                                <p>Abhijith Pingle leads the catering division of Chatpati Delhi across the United States. With over 18 years in the food and service industry, including 13 years dedicated to catering and 3,000+ successfully executed events, he brings strategic planning, operational precision, and flawless execution to every occasion.</p>
                                <p>From intimate gatherings to large-scale corporate events and grand celebrations, he ensures that every catering experience reflects the same authenticity, quality, and excellence that defines Chatpati Delhi.</p>
                                <blockquote className="founder-quote">“Precision, passion, and presentation define every event we deliver.”</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Refined About Section */}
            <section className="section about-highlights-section" style={{ paddingTop: '0' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Our Legacy & Mission</h2>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <h3>Our Story</h3>
                            <p>
                                Chatpati Delhi was born from a simple idea — bringing the true taste of Delhi street food to your table.
                                What started as a small passion project has grown into a nationally recognized culinary destination,
                                all while staying true to our cultural roots and authentic flavors.
                            </p>
                        </div>
                        <div className="about-card">
                            <h3>Our Mission</h3>
                            <p>
                                We are committed to preserving traditional recipes and authentic flavors passed down through generations.
                                Transparency, quality, and long-term relationships lie at the heart of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default AboutPage;
