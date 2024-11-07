import React from "react";
import '../css/educator.css'
function Profile(props){
    return (
        <>
            <div className="profile-card">
                <div><img src={props.img} alt="profile_pic"/></div>
                <div><p id="name">
                    {props.name}    
                </p></div>
               <div><p id="role">
                    {props.role}
                </p></div>
                <div><p id="desc">
                    {props.desc}
                </p></div>
                <div>
                    <a href="https://www.linkedin.com/" target="_blank"><button>Linkedln</button></a>
                    <a href="https://x.com" target="_blank"><button>Twitter</button></a>
                </div>
            </div>
        </>
    )
}

export default Profile

