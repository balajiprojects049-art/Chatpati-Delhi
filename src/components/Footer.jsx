import '../index.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Chatpati Delhi</h3>
                        <p>Authentic Delhi street food served with love. Experience the vibrant flavors of India.</p>
                        <div className="social-links">
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">📷</a>
                            <a href="#" className="social-link">🐦</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <a href="/#home">Home</a>
                        <a href="/#menu">Menu</a>
                        <a href="/#about">About Us</a>
                        <a href="/#contact">Contact</a>
                    </div>
                    <div className="footer-section">
                        <h3>Hours</h3>
                        <p>Monday - Friday<br />11:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday<br />10:00 AM - 11:00 PM</p>
                    </div>
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p>📍 Fratelli PSA, 109,823<br />5th Ave, USA</p>
                        <p>📞 +1 (732) 499-9387</p>
                        <p>📧 info@chatpatidelhi.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Chatpati Delhi. All rights reserved. Food Served With Love ❤️</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
