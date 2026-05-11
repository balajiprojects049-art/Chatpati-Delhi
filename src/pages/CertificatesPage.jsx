import '../index.css';
import './Royal.css';

const certificates = [
    {
        title: 'ServSafe Certification - Jimmy Poonawalla',
        image: '/images/certificates/cert_1.jpg',
        description: 'Food Protection Manager Certification Examination, ANSI Accredited.',
    },
    {
        title: 'ServSafe Certification - Abhijit Pingle',
        image: '/images/certificates/cert_2.jpg',
        description: 'Food Protection Manager Certification Examination, ANSI Accredited.',
    },
    {
        title: 'Sanitary Inspection Report',
        image: '/images/certificates/cert_3.jpg',
        description: 'Satisfactory Grade A rating from Somerset County Department of Health.',
    }
];

function CertificatesPage() {
    return (
        <div className="royal-menu-wrapper">
            <div className="container">

                {/* Page Header */}
                <div className="royal-title-container" style={{ marginBottom: '4rem' }}>
                    <span className="royal-subtitle">Quality & Safety</span>
                    <h1 className="royal-title">Our Certificates</h1>
                    <div className="royal-title-divider"><span>✦</span></div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
                        We adhere to the highest standards of food safety, hygiene, and culinary excellence to ensure the best experience for our guests.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '3rem 0 5rem' }}>
                    {certificates.map((cert, i) => (
                        <div key={i} className="royal-press-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img 
                                src={cert.image} 
                                alt={cert.title} 
                                style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.3)', marginBottom: '1.5rem', objectFit: 'cover', minHeight: '250px' }} 
                            />
                            <div className="royal-press-card-top" style={{ justifyContent: 'center', width: '100%' }}>
                                <div className="royal-press-card-outlet" style={{ textAlign: 'center', fontSize: '1.1rem' }}>{cert.title}</div>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem' }}>
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="royal-press-cta">
                    <h3>Experience It Yourself</h3>
                    <p>Don't just take their word for it — come taste the dishes that wowed the nation.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/menu" className="royal-btn-primary" style={{ textDecoration: 'none' }}>
                            View Our Menu ✦
                        </a>
                        <a href="/contact" className="royal-press-cta-outline" style={{ textDecoration: 'none' }}>
                            Contact Us
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CertificatesPage;
