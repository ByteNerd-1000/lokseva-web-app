
import React, { useState } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore"; 
import "../css/signup.css"; 


function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        terms: false,
        dateOfBirth: "",
        location: "",
        skills: "",
        experience: "",
        availability: "",
        interests: "",
        motivation: "",
        emergencyContactName: "",
        emergencyContactPhone: ""
    });
    const [showThankYou, setShowThankYou] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        
        try {
            const signupCollection = collection(db, "volunteers"); 
            await addDoc(signupCollection, formData);

            setShowThankYou(true);
            setFormData({
                username: "",
                email: "",
                terms: false,
                dateOfBirth: "",
                location: "",
                skills: "",
                experience: "",
                availability: "",
                interests: "",
                motivation: "",
                emergencyContactName: "",
                emergencyContactPhone: ""
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred. Please try again.");
        }
    };
    return (
        <div className="signup-container">
            <h2>Join Lokseva</h2>
            <p>Become a part of our community and help us make a difference! Fill in the form below to register.</p>
            <form onSubmit={handleSignup}>
                <label htmlFor="username">Full Name</label>
                <input
                    type="text"
                    required
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                />

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                    type="date"
                    required
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />

                <label htmlFor="location">Location (City, State)</label>
                <input
                    type="text"
                    required
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                />

                <label htmlFor="skills">Relevant Skills</label>
                <input
                    type="text"
                    required
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="List your skills (e.g., teaching, organizing)"
                />

                <label htmlFor="experience">Previous Volunteer Experience</label>
                <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Describe any previous volunteer experience"
                />

                <label htmlFor="availability">Availability (Days/Hours)</label>
                <input
                    type="text"
                    required
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="E.g., 5 hours per week, weekends only"
                />

                <label htmlFor="interests">Interest Areas</label>
                <input
                    type="text"
                    required
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="E.g., teaching, event organizing, health"
                />

                <label htmlFor="motivation">Why do you want to volunteer?</label>
                <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Share your motivation for volunteering"
                />

                <label htmlFor="emergencyContactName">Emergency Contact Name</label>
                <input
                    type="text"
                    required
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    placeholder="Emergency contact name"
                />

                <label htmlFor="emergencyContactPhone">Emergency Contact Phone</label>
                <input
                    type="tel"
                    required
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleChange}
                    placeholder="Emergency contact phone number"
                />

                <p>
                    <label htmlFor="terms" className="terms-label">
                        <input
                            type="checkbox"
                            required
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />
                        <a id="tr" > I accept the terms and conditions</a>
                    </label>
                </p>

                <input type="submit" value="Join us" className="signup-button" />
            </form>

            {showThankYou && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Thank You for Joining!</h3>
                        <p>We appreciate your interest in volunteering with Lokseva. Together, we can make a positive impact!</p>
                        <button onClick={() => setShowThankYou(false)} className="close-popup-button">Close</button>
                    </div>
                </div>
            )};

        </div>
    );
};

export default Signup;

