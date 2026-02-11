import React, { useEffect, useState } from 'react';
import { getCart, updateQuantity, removeFromCart, getCartTotal, clearCart } from '../utils/cart';
import './cart-panel.css';

export default function CartPanel({ open, onClose }) {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [step, setStep] = useState(1); // 1: Cart, 2: Form
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        date: '',
        time: '',
        address: '',
        message: ''
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendToWhatsApp = () => {
        const adminNumber = "14752988707"; // Updated Admin Number (USA)

        // Get and increment order number from localStorage
        const lastOrderNum = parseInt(localStorage.getItem('cpd_order_id') || '0');
        const nextOrderNum = lastOrderNum + 1;
        localStorage.setItem('cpd_order_id', nextOrderNum.toString());

        // Format as #001, #002, etc.
        const orderId = nextOrderNum.toString().padStart(3, '0');

        // Professional Box-Style Format for WhatsApp
        let message = `*Order #${orderId} - CHATPATI DELHI*\n\n`;
        message += `\`\`\`\n`;
        message += `╔═══════════════════════════╗\n`;
        message += `║      Customer Details     ║\n`;
        message += `╠═══════════════════════════╣\n`;
        message += `  ID     : ORDER-${orderId}\n`;
        message += `  Name   : ${formData.name}\n`;
        message += `  Mobile : ${formData.mobile}\n`;
        message += `  Date   : ${formData.date}\n`;
        message += `  Time   : ${formData.time}\n`;
        message += `  Loc    : ${formData.address}\n`;
        message += `╚═══════════════════════════╝\n\n`;

        message += `╔═══════════════════════════╗\n`;
        message += `║      ORDER SUMMARY        ║\n`;
        message += `╠═══════════════════════════╣\n`;
        items.forEach((it, index) => {
            message += `  ${index + 1}. ${it.name}\n`;
            message += `     ${it.quantity} x ${it.price}\n`;
            if (it.spiceLevel) message += `     (Spice: ${it.spiceLevel})\n`;
        });
        message += `╠═══════════════════════════╣\n`;
        message += `  TOTAL  : $${total.toFixed(2)}\n`;
        message += `╚═══════════════════════════╝\n`;
        message += `\`\`\`\n`;

        if (formData.message) {
            message += `*Note:* ${formData.message}\n\n`;
        }

        message += `_Sent via Website Cart_`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, '_blank');

        // NEW: Clear cart and reset form after sending
        clearCart();
        setFormData({
            name: '',
            mobile: '',
            date: '',
            time: '',
            address: '',
            message: ''
        });
        setStep(1);
        onClose();
    };

    return (
        <aside className={`cart-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
            <div className="cart-panel-header">
                <h3>{step === 1 ? 'Your Cart' : 'Order Details'}</h3>
                <button className="close-panel" onClick={onClose} aria-label="Close cart">×</button>
            </div>

            <div className="cart-panel-body">
                {step === 1 ? (
                    <>
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
                    </>
                ) : (
                    <div className="order-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Enter mobile number" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Delivery/Pickup Address</label>
                            <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="Full address" rows="2" required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Special Message</label>
                            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Any specific requirements?" rows="2"></textarea>
                        </div>
                    </div>
                )}
            </div>

            <div className="cart-panel-footer">
                <div className="cart-total">Total Amount: <strong>${total.toFixed(2)}</strong></div>
                <div className="cart-actions">
                    {step === 1 ? (
                        <>
                            <button className="btn btn-secondary" onClick={onClose}>Continue Shopping</button>
                            <button className="btn btn-primary" onClick={() => setStep(2)} disabled={items.length === 0}>Next</button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-secondary" onClick={() => setStep(1)}>Back to Cart</button>
                            <button
                                className="btn btn-primary whatsapp-btn"
                                onClick={sendToWhatsApp}
                                disabled={!formData.name || !formData.mobile || !formData.date || !formData.time || !formData.address}
                                style={{ background: '#25D366', border: 'none', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)' }}
                            >
                                Send Order to WhatsApp
                            </button>
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
}
