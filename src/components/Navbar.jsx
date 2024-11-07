import React, { useState } from 'react';
import logo from "../assets/bannerlogo.jpeg";
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="nav-bar">
                        <div id="nav-logo">
                            <Link to="/">
                                <img src={logo} alt='pre-logo' />
                            </Link>
                        </div>

                        {/* Hamburger icon */}
                        <div className="hamburger" onClick={toggleMenu}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                        {/* Links for desktop */}
                        <div id="nav-pages">
                            <ul>
                                <li><Link to="/#ongoing-work">Events</Link></li>
                                <li><Link to="/join">Join Community</Link></li>
                                <li><Link to="/testimonials">Testimonials</Link></li>
                                <li><Link to="/educator">Educators</Link></li>
                            </ul>
                        </div>

                        {/* Drawer menu for mobile */}
                        <div className={`drawer ${isOpen ? 'open' : ''}`}>
                            <ul>
                                <li><Link to="/#ongoing-work" onClick={toggleMenu}>Events</Link></li>
                                <li><Link to="/join" onClick={toggleMenu}>Join Community</Link></li>
                                <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
                                <li><Link to="/educator" onClick={toggleMenu}>Educators</Link></li>
                            </ul>
                        </div>

                        {/* Action buttons */}
                        <div className='nav-buttons'>
                            <Link to="/join"><button>Join us</button></Link>
                            <Link to="/about"><button>Learn more</button></Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
