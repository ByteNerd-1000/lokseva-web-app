
import React from "react";
import "../css/aboutus.css"; // Import the CSS file
function Aboutus() {
    return (
        <>
            <div className="about-container">
                <div className="hero-section">
                    <div className="hero-content">
                        <h2>Welcome to Lokseva</h2>
                        <p>
                            Empowering communities through collective action. Join us on our journey to make a meaningful impact in society, from education to healthcare, and more. Together, we can create positive change.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <h3>About Lokseva</h3>
                    <p>
                        Lokseva is a community-driven platform developed by Imperium with the vision of empowering individuals and communities through social service and educational initiatives. We believe that by coming together, we can create lasting, positive change that improves lives and fosters a culture of giving back.
                    </p>

                    <p>
                        Our platform serves as a hub where individuals can learn about past, ongoing, and future community efforts. It also offers an opportunity for volunteers to join us in various roles, whether in organizing health camps, running fundraisers, or contributing as educators in our free education program. Through collaboration, we work towards building a stronger, more compassionate community.
                    </p>
                </div>

                <div className="mission-vision-container">
                    <div className="mission">
                        <h4>Our Mission</h4>
                        <p>
                            Our mission is to foster a spirit of community service and volunteerism by creating opportunities for people to engage in social work. We aim to bridge the gap between those in need and those who are willing to help, facilitating impactful initiatives that improve education, healthcare, and social well-being.
                        </p>
                    </div>

                    <div className="vision">
                        <h4>Our Vision</h4>
                        <p>
                            We envision a world where everyone has access to the resources, education, and support they need to thrive. Lokseva is dedicated to creating pathways for volunteers and donors to actively participate in building a better future for all.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutus;
