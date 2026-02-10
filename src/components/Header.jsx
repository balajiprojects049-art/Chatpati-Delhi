import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartCount } from '../utils/cart';
import CartPanel from './CartPanel';
import '../index.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // initialize cart count
        setCartCount(getCartCount());

        const handleCartUpdate = (e) => {
            setCartCount((e && e.detail && typeof e.detail.count === 'number') ? e.detail.count : getCartCount());
        };

        window.addEventListener('cartUpdated', handleCartUpdate);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('cartUpdated', handleCartUpdate);
        };
    }, []);

    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <nav className="nav">
                        <div className="logo-container">
                            <Link to="/" className="logo-link">
                                <img
                                    src="/images/logo.png"
                                    alt="Chatpati Delhi Logo"
                                    className="logo"
                                />
                                <div className="brand-text">
                                    <h1>Chatpati Delhi</h1>
                                    <p>Food Served With Love</p>
                                </div>
                            </Link>
                        </div>
                        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
                            <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
                            <li><Link to="/menu" onClick={() => setMobileOpen(false)}>Menu</Link></li>
                            <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
                            <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
                        </ul>
                        <button
                            className="mobile-menu-btn"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen((v) => !v)}
                        >
                            {mobileOpen ? '✕' : '☰'}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Floating Cart Button */}
            {/* Cart Panel Removed */}
            {/* <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} /> */}
        </>
    );
}

export default Header;
