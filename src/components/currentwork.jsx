import React from 'react';
import { Link } from 'react-router-dom';
import '../css/currentwork.css';

function CurrentWork(props) {
    return (
        <div className="currentwork-card">
            <div
                className="currentwork-image"
                style={{
                    backgroundImage: `url(${props.image || 'https://via.placeholder.com/300x200'})`,
                }}
            ></div>
            <div className="currentwork-content">
                <h2>{props.title}</h2>
                <p className="date">{props.date}</p>
                <p className="description">{props.desc}</p>
                <div className="links">
                    <Link to='/about' >Learn More </Link>
                    <Link to={props.link} >{props.data}</Link>
                </div>
            </div>
        </div>
    );
}

export default CurrentWork;
