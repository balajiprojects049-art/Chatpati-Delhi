import { useState, useEffect } from 'react';
import '../index.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <div className="logo-container">
                        <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23D4AF37'/%3E%3Ccircle cx='100' cy='100' r='85' fill='white'/%3E%3Ccircle cx='100' cy='100' r='75' fill='%23D4AF37'/%3E%3Ctext x='100' y='95' text-anchor='middle' fill='white' font-size='40' font-weight='bold' font-family='Arial'%3ECPD%3C/text%3E%3Ctext x='100' y='50' text-anchor='middle' fill='%23D4AF37' font-size='16' font-family='Arial'%3ECHATPATI DELHI%3C/text%3E%3Ctext x='100' y='160' text-anchor='middle' fill='%23D4AF37' font-size='12' font-family='Arial'%3EFOOD SERVED WITH LOVE%3C/text%3E%3C/svg%3E"
                            alt="Chatpati Delhi Logo"
                            className="logo"
                        />
                        <div className="brand-text">
                            <h1>Chatpati Delhi</h1>
                            <p>Food Served With Love</p>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#menu">Menu</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                    <button className="mobile-menu-btn">☰</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
