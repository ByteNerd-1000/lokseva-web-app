
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/communitypage.css";

function Joincomms() {

 useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 
  return (
      <>
    <div className="joincomms-container">
      <div className="header-section">
        <p className="header-title" id="header-title">Join Community Today</p>
        <p className="header-description">
          Be a part of our community initiatives and help us make a difference.
          Volunteer your time, contribute your skills, and support our ongoing
          projects.
        </p>
        <div className="button-group">
          <Link to='/involved'><button className="primary-button">Get Involved</button></Link>
      <Link to="/about"><button className="secondary-button">Learn More</button></Link>
        </div>
      </div>

      <section className="volunteer-section">
        <div className="volunteer-header">
          <p className="section-title">Explore Volunteer Opportunities</p>
        </div>
        <div className="volunteer-content">
          <div className="volunteer-description">
            <p>
              Join us in making a difference! Lokseva offers a variety of
              volunteer roles to suit your interests and skills. Whether you
              have a few hours or can commit to a longer-term project, your
              contribution is valuable.
            </p>
          </div>

          <div className="volunteer-roles">
            <div className="role">
              <p className="role-title">Event Setup</p>
              <p className="role-description">
                Help us set up and organize community events. Your assistance
                ensures everything runs smoothly.
              </p>
            </div>
            <div className="role">
              <p className="role-title">Mentorship</p>
              <p className="role-description">
                Guide and support new volunteers. Share your experience and help
                them get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="join-section">
        <div className="join-content">
          <p className="section-title">Be the Change – Join Us</p>
          <p className="join-description">
            Sign up now to stay updated on our initiatives and find out how you
            can contribute to making a difference in our community.
          </p>
        </div>
        <div className="button-group">

      <Link to="/signup"><button className="primary-button">Sign Up Now</button></Link>
      <Link to="/about"><button className="secondary-button">Learn More</button></Link>
        </div>
      </section>
    </div>
      </>
  );
}

export default Joincomms;
