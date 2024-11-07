import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore'; // Import functions for adding data
import '../css/getInvolved.css';

function GetInvolved() {
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [donationData, setDonationData] = useState({
        fullName: "",
        email: "",
        phone: "",
        amount: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonationData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDonateClick = () => {
        setShowForm(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "donations"), donationData);
            setShowForm(false);
            setShowThankYou(true);
            setDonationData({ fullName: "", email: "", phone: "", amount: "", message: "" });
        } catch (error) {
            console.error("Error adding donation: ", error);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const handleModalToggle = () => {
        setShowModal(!showModal);
    };
    return (
        <div className="get-involved-container">
            <header className="get-involved-header">
                <h1>Get Involved with Lokseva</h1>
                <p>Join us in making a difference in our community! Explore various ways to contribute and participate.</p>
            </header>
            
            <section className="opportunities">
                <h2>Volunteer Opportunities</h2>
                <p>Become a volunteer and help us with various community initiatives. We welcome individuals who are passionate about making a positive impact.</p>
                <Link to='/signup'><button>Sign Up as Volunteer</button></Link>
            </section>
            
            <section className="events">
                <h2>Events Calendar</h2>
                <p>Check out our upcoming events and workshops. Your participation can make a big difference!</p>
                <Link to='/#ongoing-work' ><button>See Events</button></Link>
            </section>
        <section className="donations">
            <h2>Make a Donation</h2>
            <p>Your contributions help us continue our work. Every bit counts! Learn how you can support our initiatives.</p>
            <button onClick={handleDonateClick}>Donate Now</button>

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Support Lokseva</h3>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" name="fullName" required value={donationData.fullName} onChange={handleChange} placeholder="Enter your full name" />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" required value={donationData.email} onChange={handleChange} placeholder="Enter your email" />

                            <label htmlFor="phone">Phone Number (optional)</label>
                            <input type="text" name="phone" value={donationData.phone} onChange={handleChange} placeholder="Enter your phone number" />

                            <label htmlFor="amount">Donation Amount</label>
                            <input type="number" name="amount" required value={donationData.amount} onChange={handleChange} placeholder="Enter donation amount" />

                            <label htmlFor="message">Message (optional)</label>
                            <textarea name="message" value={donationData.message} onChange={handleChange} placeholder="Leave a message"></textarea>

                            <button type="submit" className="submit-button">Submit Donation</button>
                        </form>
                        <button className="close-button" onClick={() => setShowForm(false)}>Close</button>
                    </div>
                </div>
            )}

            {showThankYou && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Thank You for Your Generosity!</h3>
                        <p>Your donation helps us make a difference. We deeply appreciate your support in our mission!</p>
                        <button className="close-button" onClick={() => setShowThankYou(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
            
         
        <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need more information, please feel free to reach out to us.</p>
        <button onClick={handleModalToggle}>Get in Touch</button>

        {showModal && (
            <div className="modal-overlay">
            <div className="modal-content">
            <h3>Contact Information</h3>
            <p>Phone: +123-456-7890</p>
            <p>Email: info@lokseva.org</p>
            <button className="close-button" onClick={handleModalToggle}>Close</button>
            </div>
            </div>
        )}
        </section>

            <footer className="get-involved-footer">
                <p>Follow us on social media to stay updated!</p>
                <div className="social-media-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </footer>
        </div>
    );
}
export default GetInvolved;
