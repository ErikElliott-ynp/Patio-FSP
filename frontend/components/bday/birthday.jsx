import React from 'react';

const Birthday = (props) => {
    return (
        <div className="right-side">
            <div className="bday-box">
                <div className="bday-total">
                    <div className="bday-img"></div>
                    <div className="bday-text">
                        <span>{props.user.fname} {props.user.lname}</span>
                    </div>
                </div>
                
            </div>
            <div className="lang-box">
                <p className="english">English (US)</p>
            </div>
        </div>
    )
}

Birthday.defaultProps = {
    user: {
        fname: "",
        lname: ""
    }
}

export default Birthday;