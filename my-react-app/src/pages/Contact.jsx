import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        console.log('Form submitted:', formData);
        setShowSuccess(true);
        
        // Reset form after showing success message
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setShowSuccess(false);
        }, 3000);
    };

    return (
        <div className="contact-container fade-in">
            <h1>Get in Touch</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className={`form-group ${focusedField === 'subject' ? 'focused' : ''}`}>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        placeholder="Enter subject"
                        required
                    />
                </div>
                <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        placeholder="Enter your message"
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            {showSuccess && (
                <div className="success-message">
                    Thank you for your message! We will get back to you soon.
                </div>
            )}
        </div>
    );
}

export default Contact; 