import '../index.css';

function ContactPage() {
    return (
        <div className="contact-page">
            <section className="section contact-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Get in Touch</h2>
                    </div>
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@chatpatidelhi.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (732) 499-9387</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Address</h4>
                                    <p>Fratelli PSA, 109,823, 5th Ave, USA</p>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" className="form-input" />
                            <input type="email" placeholder="Your Email" className="form-input" />
                            <input type="tel" placeholder="Phone Number" className="form-input" />
                            <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
                            <button type="submit" className="btn btn-primary btn-full">Send Message ➤</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
