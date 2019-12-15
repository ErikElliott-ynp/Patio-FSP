import React from 'react';
import { Link } from "react-router-dom";

const Birthday = (props) => {
    return (
        <div className="right-side">
            <div className="bday-total">
                
                    <div className="bday-img"></div>
                    <div className="bday-text-news">
                         <Link to={`/users/${props.bdayUser.id}`} className="bday-link">{props.bdayUser.firstName} {props.bdayUser.lastName}'s</Link> Birthday is today!
                    </div>
                
                
            </div>
            <div className="lang-box">
                <p className="english">English (US) •    San Francisco, CA</p>
            </div>
        </div>
    )
}

Birthday.defaultProps = {
    bdayUser: {
        id: null,
        firstName: "",
        lastName: ""
    }
}

export default Birthday;