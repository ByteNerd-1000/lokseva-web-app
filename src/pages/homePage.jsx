
import React from "react";
import { Link } from "react-router-dom";
import homebanner from "../assets/tenweb_media_82QqpEIi.webp";
import "../css/homepage.css"; 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OngoingWork from "../components/ongoingwork.jsx";
import FutureWork from "../components/futurework.jsx";

function Homepage() {

    const { hash } = useLocation();
    console.log(hash);

    useEffect(() => {
        if (hash) {
            const elementId = hash.replace('#', ''); 
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]); 

    return (
        <>
            <section className="homepage-intro">
                <div className="intro-content">
                    <img src={homebanner} height={500} width={800} alt="homepagepic" />
                    <div className="overlay">
                        <h2>Join Our Community Events</h2>
                        <p>
                            Discover the joy of participating in our community events.
                            Engage with like-minded individuals and make a difference in your community.
                        </p>
                        <div className="intro-buttons">
                            <Link to='/join'>
                                <button>Get Involved</button>
                            </Link>
                            <Link to='/about'>
                                <button>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <OngoingWork />
        <FutureWork />
        </>
    );
}

export default Homepage;
