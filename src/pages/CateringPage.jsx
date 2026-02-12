import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../utils/cart';
import '../index.css';

const CateringPage = () => {
    const [cartToast, setCartToast] = useState(false);

    const handleAddToCart = (item) => {
        addToCart(item, 1);
        setCartToast(true);
        setTimeout(() => setCartToast(false), 2000);
    };

    const cateringMenuItems = [
        { id: 'cat-1', name: 'Golgappe Live Station', price: '12.95', image: '/images/chats/Golgappe.png', description: 'Interactive live station serving fresh spicy pani puri.', category: 'Live Station' },
        { id: 'cat-2', name: 'Raj Kachori Platter', price: '9.95', image: '/images/chats/Raj Kachori.png', description: 'Royal size kachori filled with our signature flavors.', category: 'Starter' },
        { id: 'cat-3', name: 'Delhi Chole Bhature', price: '12.95', image: '/images/Snacks/Chole Bhature.png', description: 'Our award-winning fluffy bhaturas with spicy chana.', category: 'Main Course' },
        { id: 'cat-4', name: 'Purani Delhi Chicken Biryani', price: '16.95', image: '/images/Biriyani/Purani Delhi Chicken Biryani.png', description: 'Aromatic slow-cooked chicken biryani with Delhi spices.', category: 'Biryani' },
        { id: 'cat-5', name: 'Paneer Makhanwala', price: '14.95', image: '/images/Tadka Marke/Paneer Makhanwala.png', description: 'Paneer in a rich, creamy tomato gravy.', category: 'Main Course' },
        { id: 'cat-6', name: 'Dal Makhanwala', price: '13.95', image: '/images/Tadka Marke/Daal Makhanwala.png', description: 'Overnight slow-cooked black lentils in creamy butter.', category: 'Main Course' },
        { id: 'cat-7', name: 'Butter Chicken (Party Pack)', price: '16.95', image: '/images/Tadka Marke/Butter Chicken.png', description: 'Classic buttery chicken tikka in tomato cream sauce.', category: 'Main Course' },
        { id: 'cat-8', name: 'Assorted Bread Basket', price: '20.95', image: '/images/Breads/Bread Basket (4 Pcs).jpg', description: 'Mix of Garlic Naan, Kulchas, and Tandoori Rotis.', category: 'Breads' },
        { id: 'cat-9', name: 'Karjat Vada Pav Stall', price: '9.95', image: '/images/Mumbai Local/Karjat Vada Pav.png', description: 'Authentic Mumbai style potato vada in soft pav.', category: 'Live Station' },
        { id: 'cat-10', name: 'Hot Gajar ka Halwa', price: '6.95', image: '/images/Sweets/Gajar ka Halwa.png', description: 'Warm carrot pudding made with clarified butter.', category: 'Sweets' },
        { id: 'cat-11', name: 'Signature Rasmalai', price: '6.95', image: '/images/Sweets/Rasmalai.png', description: 'Soft cheese dumplings in chilled saffron milk.', category: 'Sweets' },
        { id: 'cat-12', name: 'Premium Veg Thali', price: '17.95', image: "/images/Thali's/C.P.D Veg Thali.png", description: 'Full assorted meal with appetizers and main dishes.', category: 'Platter' },
        { id: 'cat-13', name: 'Aam Ki Lassi Jar', price: '4.95', image: '/images/Drinks/Aam Ki Lassi.jpg', description: 'Refreshing mango yogurt drink.', category: 'Drinks' },
        { id: 'cat-14', name: 'Papri Chaat Bowls', price: '8.95', image: "/images/chats/Papri Chaat'.png", description: 'Crunchy crackers topped with yogurt and chutney.', category: 'Appetizer' },
        { id: 'cat-15', name: 'Mini Samosa Bucket', price: '4.00', image: '/images/bhara-samosa.png', description: 'Perfect bite-sized party appetizer.', category: 'Appetizer' }
    ];

    return (
        <div className="catering-page">
            {cartToast && <div className="cart-toast" style={{ background: '#2ecc71', color: 'white', position: 'fixed', top: '100px', right: '20px', padding: '15px 30px', borderRadius: '10px', zIndex: 9999, fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>✅ Added to Catering Cart</div>}

            <section className="page-hero" style={{ backgroundImage: "url('/images/hero-2.png')" }}>
                <div className="container">
                    <h1 className="page-hero-title">Premium Catering Menu</h1>
                    <p className="page-hero-subtitle">Select your favorite dishes for your special event. Add them directly to your cart for booking.</p>
                </div>
            </section>

            <section className="section catering-menu-section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">Exclusive Packages</span>
                        <h2>Party & Event Menu</h2>
                    </div>

                    <div className="product-grid">
                        {cateringMenuItems.map((item) => (
                            <div key={item.id} className="product-card">
                                <span className="badge-category" style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--primary-maroon)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', zIndex: 10, fontWeight: 'bold' }}>
                                    {item.category}
                                </span>
                                <div className="product-image">
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name" style={{ fontSize: '1.4rem' }}>{item.name}</h3>
                                    <p className="product-description">{item.description}</p>
                                    <div className="product-footer" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="product-price" style={{ color: 'var(--primary-maroon)', fontSize: '1.25rem', fontWeight: '800' }}>
                                            ${item.price}
                                        </span>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleAddToCart({ ...item, price: `$${item.price}` })}
                                            style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section enquiry-section" style={{ background: '#fdfaf5' }}>
                <div className="container">
                    <div className="enquiry-card" style={{ background: 'white', padding: '4rem', borderRadius: '15px', textAlign: 'center', border: '1px solid var(--accent-gold)' }}>
                        <h2>Custom Event Planning?</h2>
                        <p>Need a customized menu or specific item quantity for 100+ guests? Our team is here to help.</p>
                        <div className="enquiry-actions" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
                            <Link to="/contact" className="btn btn-primary">Get Custom Quote</Link>
                            <a href="tel:+17329601887" className="btn btn-secondary">Call Events Team</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CateringPage;
