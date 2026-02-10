import '../index.css';

function AboutPage() {
    return (
        <div className="about-page">
            <section className="section about-section">
                <div className="container">
                    <div className="section-title">
                        <h2>About Chatpati Delhi</h2>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <h3>Our Story</h3>
                            <p>
                                Chatpati Delhi was born from a simple idea — bringing the true taste of Delhi street food to your table.
                                We started with a passion for authentic flavors and the desire to keep our cultural roots alive through
                                food made the right way.
                            </p>
                            <p>
                                At Chatpati Delhi, we celebrate the taste of our heritage and deliver it fresh to your table,
                                just the way it was meant to be.
                            </p>
                        </div>
                        <div className="about-card">
                            <h3>Our Mission</h3>
                            <p>
                                We are committed to providing the freshest, highest-quality dishes while preserving traditional
                                recipes and authentic flavors that have been passed down through generations.
                            </p>
                            <p>
                                Transparency, quality, and long-term relationships lie at the heart of everything we do.
                                Your satisfaction and taste buds always come first.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
