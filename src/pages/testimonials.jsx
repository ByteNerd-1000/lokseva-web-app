
import React, { useState } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore"; 
import "../css/testimonials.css"; 

function Testimonials() {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
        terms: false,
    });

    
    const [showPopup, setShowPopup] = useState(false);

    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const testimonialsCollection = collection(db, "testimonials");

            
            await addDoc(testimonialsCollection, formData);

            
            setShowPopup(true);
            setFormData({
                username: '',
                email: '',
                message: '',
                terms: false
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <p>Community Voices</p>
                    <p>
                        Hear from our community! Discover how Lokseva has impacted lives and
                        fostered connections.
                    </p>
                </div>
                <div className="submit-testimonial">
                    <p>Share Your Experience</p>
                    <p>
                        We value your feedback and would love to hear about your experience with
                        Lokseva. Please fill out the form below to share your story.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Name</label>
                        <input
                            type="text"
                            required
                            name="username"
                            placeholder="Enter your name"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Enter your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            cols={50}
                            placeholder="Type Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        
                        <hr />
                       
                        <input
                            type="checkbox"
                            required
                            name="terms"
                            id="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />
  
                        <label htmlFor="terms" id="accept">
                            I accept the terms
                        </label>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

            {}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Thank You for Your Feedback!</h3>
                        <p>We appreciate your testimonial and will use it to help our community grow.</p>
                        <button onClick={() => setShowPopup(false)} className="close-popup-button">Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
