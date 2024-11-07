import React from 'react'
import '../css/footer.css';
import facebooklogo from '../assets/facebook.png'
import instalogo from '../assets/instagram.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>

            <footer>
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-column">
                            <h4>About Lokseva</h4>
                            <p>Lokseva is dedicated to connecting communities by showcasing ongoing and past projects. Join us in making a positive impact through service, education, and collaboration.</p>
                        </div>

                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to={'/about'}>About Us</Link></li>
                                <li><Link to={'/'}>Our Projects</Link></li>
                                <li><Link to={'/join'}>Join the Movement</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contact Us</h4>
                            <p>Email:  <a href="mailto:info@lokseva.com">info@lokseva.com</a></p>
                            <p>Phone: +91 12345 67890</p>
                            <p>Follow us on:</p>
                            <div className="social-links">
                                <img src={facebooklogo} height={30} width={30} alt="Facebook"/>
                                <img src={instalogo}  height={30} width={30} alt="Instagram"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <hr/>
                            <p>&copy; 2024 Lokseva | All Rights Reserved | Built with <span  className="heart">❤</span> by the Lokseva Intern</p>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer
