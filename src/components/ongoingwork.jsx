
import React from 'react';
import CurrentWork from './currentwork.jsx';
import "../css/ongoingwork.css"; 
import water from '../assets/water.jpg'
import health from '../assets/health.jpeg'
import plant from '../assets/plant.jpg'
import community from '../assets/water.jpg'

function OngoingWork() {
    return (
        <>
        <article className="ongoing-work" id="ongoing-work">
            <p id="current-work-title"><strong>Community Ongoing Work</strong></p>
            <p id="current-work-desc">Explore our current initiatives and be a part of our mission to create a better community through impactful projects and events.</p>
            
            <div className="current-work-list">
                <CurrentWork
                    title='Clean Water Fundraiser Drive'
                    date='October 10 – November 15, 2024'
                    desc='We are collaborating with local communities to raise funds for clean water access in remote villages, installing sustainable filtration systems and improving sanitation practices.'
                    data='Donate Now'
                    image={water}
                    link='/involved'
                />
                <CurrentWork
                    title='Health Awareness Camp'
                    date='October 20 – October 22, 2024'
                    desc='A 3-day health camp providing free medical checkups, health education, and vaccination drives in underprivileged areas. Join as a doctor or volunteer.'
                    data='Volunteer Now'
                    link='/involved'
                    image={health}
                />
                <CurrentWork
                    title='Community Tree Plantation Drive'
                    date='Ongoing'
                    desc='Join our mission to plant 1,000 trees in urban and rural areas to combat climate change. Help with planting, maintaining, and educating local communities on environmental conservation.'
                    data='Sign Up'
                    link='/signup'
                    image={plant}
                />
                <CurrentWork
                    title='Educational Outreach Program'
                    date='Ongoing'
                    desc='Our Free Education Program helps children from underserved communities gain access to quality education through tutoring and mentoring. We need educators to support this cause.'
                    data='Become an Educator'
                    image={community}
                    link='/register'
                />
            </div>
        </article>
        </>
    );
}

export default OngoingWork;
