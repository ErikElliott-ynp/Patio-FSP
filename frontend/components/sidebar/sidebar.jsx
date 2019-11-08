import React from "react";
import { Link } from "react-router-dom"

const Sidebar = (props) => {
    return (
        <div className="feed-side-main">
            <span> <img src="#" alt=""/> {props.currentUser.firstName}  {props.currentUser.lastName}</span>
            <Link to="/feed">
                <span><i class="fas fa-newspaper"></i> News Feed</span>
            </Link>
            
            <a href="https://www.linkedin.com/in/erik-elliott/">
                <span><i className="fab fa-linkedin-in"></i> LinkedIn</span>
            </a>
            <a href="https://github.com/ErikElliott-ynp">
                <span><i class="fab fa-github"></i> Github</span>
            </a>
            <a href="https://github.com/ErikElliott-ynp/Patio-FSP">
                <span><i class="fas fa-code-branch"></i> Patio Repo</span>
            </a>
           
        </div>
    )
}

export default Sidebar;