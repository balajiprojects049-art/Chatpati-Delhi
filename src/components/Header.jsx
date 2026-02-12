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
                            <li><Link to="/articles" onClick={() => setMobileOpen(false)}>Articles</Link></li>
                            <li className="dropdown-container">
                                <Link to="/catering" onClick={() => setMobileOpen(false)}>
                                    Caterings <span className="arrow-icon">▼</span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/sweet-box" onClick={() => setMobileOpen(false)}>Sweet Box</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
                        </ul>
                        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <button
                                className="cart-btn"
                                onClick={() => setCartOpen(true)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    padding: '5px'
                                }}
                            >
                                🛒
                                {cartCount > 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '-5px',
                                        right: '-5px',
                                        background: 'var(--accent-gold)',
                                        color: 'var(--primary-maroon)',
                                        borderRadius: '50%',
                                        width: '20px',
                                        height: '20px',
                                        fontSize: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold'
                                    }}>
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <button
                                className="mobile-menu-btn"
                                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen((v) => !v)}
                            >
                                {mobileOpen ? '✕' : '☰'}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}

export default Header;
