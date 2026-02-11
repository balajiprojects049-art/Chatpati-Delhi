import '../index.css';

function PressPage() {
    return (
        <div className="press-page">
            {/* Page Hero */}
            <section className="page-hero articles-hero">
                <div className="container">
                    <h1 className="page-hero-title">Featured Articles</h1>
                    <p className="page-hero-subtitle">Chatpati Delhi in the National Spotlight.</p>
                </div>
            </section>

            {/* NYT Feature Section */}
            <section className="nyt-feature-section">
                <div className="container">
                    <div className="nyt-header">
                        <div className="nyt-logo-text">The New York Times</div>
                        <div className="nyt-badge">2025 Best Restaurants List</div>
                    </div>
                    <div className="nyt-content">
                        <div className="nyt-intro-quote">
                            "What does it mean to be a “best restaurant”? These places all have delicious food and a mastery of craft,
                            but also a generosity of spirit and a singular point of view. To make their selections, 14 of our reporters
                            and editors took 76 flights to eat more than 200 meals in 33 states... These are 50 places where we found just that."
                        </div>
                        <hr className="nyt-hr" />
                        <div className="nyt-main-accolade">
                            "The Chole Bhatura at Chatpati Delhi is a revelation golden balloons of bread the size of cantaloupes!"
                        </div>
                        <hr className="nyt-hr" />
                        <div className="nyt-stats-desc">
                            "We show up unannounced and make reservations the old-fashioned way. We pay for all of our food, and we don’t accept freebies. We eat like you do, with the same hope for a meal to remember... to be welcomed and delighted."
                        </div>
                        <div className="nyt-footer-name">BRIAN GALLAGHER</div>
                    </div>
                </div>
            </section>

            {/* Featured Review Section */}
            <section className="featured-review-section">
                <div className="container">
                    <div className="featured-review-content">
                        <div className="review-branding">
                            <p className="review-category">Restaurant Revue</p>
                            <img src="/images/peasant-wife-logo.png" alt="" style={{ height: '60px', marginBottom: '1rem' }} />
                        </div>
                        <h2 className="featured-review-quote">
                            "A strip mall storefront along the Garden State’s own Spice Route is where Chef Hema Singh leads a 14-person kitchen and her husband Jimmy Poonawalla runs the floor show.
                            It’s not the Taj Mahal, but it’s a wonder of tastes and right now is New Jersey’s finest South Asian restaurant."
                        </h2>
                        <div className="review-attribution">
                            by <span className="review-author">Andy Clurfeld</span> | March 2025 | The Peasant Wife
                        </div>
                    </div>
                </div>
            </section>

            {/* In the Spotlight Grid Section (Moved from About previously) */}
            <section className="section press-section">
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">Nationally Recognized</span>
                        <h2>Further Press Coverage</h2>
                    </div>

                    <div className="press-grid">
                        <div className="press-card">
                            <div className="press-logo">NJ Monthly</div>
                            <p className="press-quote">
                                "Chatpati Delhi was the only New Jersey spot to make the New York Times list of the 50 best places to eat in America.
                                A local treasure that has become a national dining destination."
                            </p>
                            <div className="press-date">September 2025 | State Exclusive</div>
                        </div>

                        <div className="press-card">
                            <div className="press-logo">NJ.com</div>
                            <p className="press-quote">
                                "If you’re hungry for authentic Indian street food, you won’t do any better than Chatpati Delhi.
                                The Purani Delhi Chicken Biryani and show-stopping Chole Bhature prove it's a worthy inclusion on the national stage."
                            </p>
                            <div className="press-date">September 2025 | Restaurant Review</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PressPage;
