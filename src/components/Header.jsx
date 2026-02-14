import { useState, useEffect } from 'react';
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
                        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
                            <li><a href="/#home" onClick={() => setMobileOpen(false)}>Home</a></li>
                            <li><a href="/#menu" onClick={() => setMobileOpen(false)}>Menu</a></li>
                            <li><a href="/#about" onClick={() => setMobileOpen(false)}>About</a></li>
                            <li><a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
                        </ul>
                        <div className="cart-container">
                            <button className="cart-btn" aria-label="View cart" onClick={() => setCartOpen(true)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="10" cy="20" r="1.5" fill="currentColor" />
                                    <circle cx="18" cy="20" r="1.5" fill="currentColor" />
                                </svg>
                                <span className="cart-badge">{cartCount}</span>
                            </button>
                        </div>
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
            <button
                className={`floating-cart-btn ${cartCount > 0 ? 'visible' : ''}`}
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
            >
                <div className="cart-icon-wrapper">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="10" cy="20" r="1.5" fill="currentColor" />
                        <circle cx="18" cy="20" r="1.5" fill="currentColor" />
                    </svg>
                    <span className="floating-cart-badge">{cartCount}</span>
                </div>
                <span className="cart-label">Cart</span>
            </button>

            <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}

export default Header;
