import '../index.css';
import './Royal.css';

const founders = [
    {
        name: 'Hema Singh',
        title: 'Founder & Culinary Creator',
        image: '/images/hema-singh.jpg',
        bio: 'Hema Singh is the heart and soul of Chatpati Delhi. As the creative force behind our signature masalas and authentic recipes, she brings over 18 years of culinary experience rooted in tradition and passion. Every spice blend, every aroma, and every flavor reflects her dedication to preserving authentic Indian taste while delivering unforgettable dining experiences.',
        quote: '“Food should feel like home.”',
        reverse: false
    },
    {
        name: 'Jimmy Poonawalla',
        title: 'Founder & Operations Director',
        image: '/images/jimmy-poonamwala.jpg',
        bio: 'With over 18 years of experience in hospitality and restaurant management, Jimmy ensures that every guest at Chatpati Delhi feels valued and welcomed. As the operational backbone of the restaurant, he manages daily operations, team leadership, and service excellence. His focus on quality, consistency, and customer satisfaction keeps the restaurant running smoothly.',
        quote: '“Hospitality is not a service — it’s a responsibility.”',
        reverse: true
    },
    {
        name: 'Abhijith Pingle',
        title: 'Founder & Catering Director',
        image: '/images/abhijith-founder.jpg',
        bio: 'Abhijith Pingle leads the catering division of Chatpati Delhi across the United States. With over 18 years in the food and service industry, including 13 years dedicated to catering and 3,000+ successfully executed events, he brings strategic planning, operational precision, and flawless execution to every occasion.',
        quote: '“Precision, passion, and presentation define every event we deliver.”',
        reverse: false
    },
    {
        name: 'Pradeep Singh',
        title: 'Founder',
        image: '/images/pradeep-singh.jpg',
        bio: 'Pradeep Singh, the visionary founder of Chatpati Delhi, is deeply involved in the restaurant’s daily operations, ensuring excellence in every detail. From maintaining authentic flavors to upholding the highest standards of service, he plays a pivotal role in delivering a refined dining experience. His dedication to quality has shaped Chatpati Delhi into a distinguished destination.',
        quote: '“Quality is never an accident; it is always the result of high intention.”',
        reverse: true
    }
];

function AboutPage() {
    return (
        <div className="royal-menu-wrapper">
            <div className="container">
                
                {/* Hero Header */}
                <div className="royal-title-container" style={{ marginBottom: '5rem' }}>
                    <span className="royal-subtitle">Our Journey</span>
                    <h1 className="royal-title">The People & The Passion</h1>
                    <div className="royal-title-divider"><span>✦</span></div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '2rem auto 0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        Since 2021, we have been dedicated to bringing the soul-satisfying authentic tastes of Old Delhi's narrow lanes 
                        to the heart of New Jersey. This is our story, driven by tradition and family.
                    </p>
                </div>

                {/* Meet the Founders Section */}
                <div className="royal-about-grid">
                    {founders.map((founder, i) => (
                        <div key={i} className={`royal-founder-row ${founder.reverse ? 'royal-founder-reverse' : ''}`}>
                            <div className="royal-founder-image-col">
                                <div className="royal-founder-image-frame">
                                    <img 
                                        src={founder.image} 
                                        alt={founder.name} 
                                        onError={(e) => { e.target.src = '/avatar.png'; }}
                                        className="royal-founder-img"
                                    />
                                    <div className="royal-founder-accent"></div>
                                </div>
                            </div>
                            <div className="royal-founder-content-col">
                                <div className="royal-founder-info">
                                    <span className="royal-founder-pre">{founder.title}</span>
                                    <h2 className="royal-founder-name">{founder.name}</h2>
                                    <div className="royal-founder-divider"></div>
                                    <p className="royal-founder-bio">{founder.bio}</p>
                                    <blockquote className="royal-founder-quote">{founder.quote}</blockquote>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mission & Legacy */}
                <div className="royal-mission-section">
                    <div className="royal-mission-card">
                        <div className="royal-mission-icon">📜</div>
                        <h3>Our Story</h3>
                        <p>
                            Chatpati Delhi was born from a simple idea — bringing the true taste of Delhi street food to your table. 
                            What started as a small passion project has grown into a nationally recognized culinary destination, 
                            all while staying true to our cultural roots and authentic flavors.
                        </p>
                    </div>
                    <div className="royal-mission-card">
                        <div className="royal-mission-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            We are committed to preserving traditional recipes and authentic flavors passed down through generations. 
                            Transparency, quality, and long-term relationships lie at the heart of everything we do.
                        </p>
                    </div>
                </div>

                {/* Coming Soon / Services */}
                <div className="royal-services-highlight">
                    <div className="royal-services-label">Expansion in Progress</div>
                    <h2 className="royal-services-title">New Horizons</h2>
                    <div className="royal-services-grid">
                        {[
                            { name: 'Catering Services', desc: 'Nationwide premium event catering' },
                            { name: 'Live Food Stalls', desc: 'Bring the street food experience to you' },
                            { name: 'Sweets Bulk Orders', desc: 'Artisanal gift boxes for every occasion' }
                        ].map((s, i) => (
                            <div key={i} className="royal-service-item">
                                <span className="royal-service-dot">✦</span>
                                <div className="royal-service-text">
                                    <h4>{s.name}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;
