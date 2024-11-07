
import React, { useState } from "react";
import { db} from "../../config/firebase.js"; 
import { collection, addDoc } from "firebase/firestore";
import "../css/educatorRegistration.css";

function EducatorRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        subjectExpertise: '',
        experience: '',
        availability: '',
        bio: '',
        agreeToTerms: false,
    });
    const [showPopup, setShowPopup] = useState(false);

    // Handle input changes and update state
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Submit form data to Firestore
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Add data to Firestore
    await addDoc(collection(db, "educators"), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      qualification: formData.qualification,
      subjectExpertise: formData.subjectExpertise,
      experience: formData.experience,
      availability: formData.availability,
      bio: formData.bio,
      agreeToTerms: formData.agreeToTerms,
    });

    setShowPopup(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      qualification: '',
      subjectExpertise: '',
      experience: '',
      availability: '',
      bio: '',
      agreeToTerms: false,
    });

  } catch (error) {
    console.error('Error adding document: ', error);
    alert('An error occurred while submitting your data.');
  }
}; 
    return (
        <div className="educator-registration-container">
            <h1>Become a Lokseva Educator</h1>
            <p className="intro">
                Join our mission to provide accessible, quality education to all. Fill out the registration
                form below to share your expertise and make a meaningful impact in the community.
            </p>

            <form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <p className="section-desc">Please provide your contact details for us to reach out.</p>

                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <h2>Professional Details</h2>
                <p className="section-desc">Tell us about your teaching background and expertise.</p>

                <label htmlFor="qualification">Highest Qualification</label>
                <input
                    type="text"
                    name="qualification"
                    required
                    placeholder="E.g., Master's in Education"
                    value={formData.qualification}
                    onChange={handleChange}
                />

                <label htmlFor="subjectExpertise">Subject Expertise</label>
                <input
                    type="text"
                    name="subjectExpertise"
                    required
                    placeholder="E.g., Mathematics, Science"
                    value={formData.subjectExpertise}
                    onChange={handleChange}
                />

                <label htmlFor="experience">Teaching Experience (in years)</label>
                <input
                    type="number"
                    name="experience"
                    max={45}
                    min={0}
                    required
                    placeholder="Enter years of experience"
                    value={formData.experience}
                    onChange={handleChange}
                />

                <label htmlFor="availability">Availability</label>
                <input
                    type="text"
                    name="availability"
                    required
                    placeholder="E.g., Weekdays, Evenings"
                    value={formData.availability}
                    onChange={handleChange}
                />

                <h2>About You</h2>
                <p className="section-desc">Help us get to know you by sharing a brief bio.</p>

                <label htmlFor="bio">Brief Bio</label>
                <textarea
                    name="bio"
                    rows="4"
                    placeholder="Tell us about yourself"
                    value={formData.bio}
                    onChange={handleChange}
                    style={{ resize: 'none' }}
                ></textarea>

                <div className="terms-section">
                    <label className="terms">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            required
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                        />
                        <p> I agree to the terms and conditions </p>
                    </label>
                </div>

                <button type="submit" id="submit-btn">Submit Application</button>
            </form>

            {showPopup && (
                <div className="popup" id="submit-popup">
                    <div className="popup-content">
                        <h2>Thank you for registering!</h2>
                        <p>You will be notified later.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EducatorRegistration;
