import React, { useEffect, useState } from 'react';
import { getCart, updateQuantity, removeFromCart, getCartTotal } from '../utils/cart';
import './cart-panel.css';

export default function CartPanel({ open, onClose }) {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const refresh = () => {
            const c = getCart();
            setItems(c);
            setTotal(getCartTotal());
        };

        refresh();
        const handler = () => refresh();
        window.addEventListener('cartUpdated', handler);
        return () => window.removeEventListener('cartUpdated', handler);
    }, []);

    const changeQty = (id, qty, spiceLevel = null) => {
        updateQuantity(id, qty, spiceLevel);
        const c = getCart();
        setItems(c);
        setTotal(getCartTotal());
    };

    const removeItem = (id, spiceLevel = null) => {
        removeFromCart(id, spiceLevel);
        const c = getCart();
        setItems(c);
        setTotal(getCartTotal());
    };

    return (
        <aside className={`cart-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
            <div className="cart-panel-header">
                <h3>Your Cart</h3>
                <button className="close-panel" onClick={onClose} aria-label="Close cart">×</button>
            </div>

            <div className="cart-panel-body">
                {items.length === 0 && <div className="empty">Your cart is empty</div>}
                {items.map((it, index) => (
                    <div key={`${it.id}-${it.spiceLevel || 'none'}-${index}`} className="cart-item">
                        <div className="ci-image">
                            {it.image && (it.image.startsWith('/') || it.image.startsWith('http')) ? (
                                <img src={it.image} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                            ) : (
                                <span style={{ fontSize: '2rem' }}>{it.image || '🍽️'}</span>
                            )}
                        </div>
                        <div className="ci-content">
                            <div className="ci-details">
                                <div className="ci-name">
                                    {it.name}
                                    {it.spiceLevel && <span className="spice-indicator"> ({it.spiceLevel})</span>}
                                </div>
                                <div className="ci-price">{it.price}</div>
                            </div>
                            <div className="ci-actions">
                                <div className="qty-control">
                                    <button onClick={() => changeQty(it.id, (it.quantity || 1) - 1, it.spiceLevel)} aria-label="Decrease quantity">−</button>
                                    <span>{it.quantity}</span>
                                    <button onClick={() => changeQty(it.id, (it.quantity || 1) + 1, it.spiceLevel)} aria-label="Increase quantity">+</button>
                                </div>
                                <button className="remove-btn" onClick={() => removeItem(it.id, it.spiceLevel)} aria-label="Remove item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-panel-footer">
                <div className="cart-total">Subtotal: <strong>${total.toFixed(2)}</strong></div>
                <div className="cart-actions">
                    <button className="btn btn-secondary" onClick={onClose}>Continue Shopping</button>
                    <button className="btn btn-primary">Checkout</button>
                </div>
            </div>
        </aside>
    );
}
