
import React from "react";
import { Link } from "react-router-dom";
import blood_camp from "../assets/blood-donation.webp";
import fundraiser_pic from "../assets/fundraiser.png";
import seminar_pic from "../assets/seminar-banner.png";
import "../css/futurework.css";

function FutureWork() {
    return (
        <>
            {/* Banner Section */}
            <div className="banner-div">
                <div className="banner-content">
                    <h1 className="banner-title">Join Lokseva's Community</h1>
                    <p className="banner-subtitle">Contribute to ongoing and upcoming community projects.</p>
                    <Link to="/join">
                        <button type="button" className="join-button">Join Now</button>
                    </Link>
                </div>
            </div>

            {/* Past Achievements Section */}
            <section className="achievements-section">
                <h2 className="section-title">Our Past Achievements</h2>
                <div className="prev-work">
                    <div className="prev-work-item blood-camp">
                        <img className="work-image" src={blood_camp} alt="Blood Donation Camp" />
                        <div className="work-content">
                            <h3 className="work-title">Blood Donation Camp</h3>
                            <p className="work-desc">
                                Our recent Blood Donation Camp saw over 200 participants, impacting lives and contributing to the local blood banks.
                            </p>
                        </div>
                    </div>

                    <div className="prev-work-item fundraiser">
                        <img className="work-image" src={fundraiser_pic} alt="Fundraiser Camp" />
                        <div className="work-content">
                            <h3 className="work-title">Fundraiser Camp</h3>
                            <p className="work-desc">
                                Through community-driven efforts, our fundraising campaigns helped raise significant contributions for various causes.
                            </p>
                        </div>
                    </div>

                    <div className="prev-work-item seminar">
                        <img className="work-image" src={seminar_pic} alt="Seminars and Webinars" />
                        <div className="work-content">
                            <h3 className="work-title">Seminars and Webinars</h3>
                            <p className="work-desc">
                                Key takeaways from our educational seminars and webinars focused on spreading awareness about health, education, and environmental issues.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FutureWork;
