import React from "react";

class Icons extends React.Component {
    constructor(props) {
        super(props)
        this.handleFriends = this.handleFriends.bind(this);
    }

    handleFriends() {
        let ele = document.getElementById('friend-box')
        let classArray = Array.from(ele.classList);
        let icon = document.getElementById('icon-friend')
        if (classArray.includes("hidden")) {
            ele.classList.remove('hidden');
            icon.style.color = 'white';
        } else {
            ele.classList.add('hidden');
            icon.style.color = "rgb(58, 56, 56)"
        }
    }
    render () {
        return (
            <div className="icons-cont">
                <i onClick={this.handleFriends} className="fas fa-user-friends" id="icon-friend"></i>
                <i className="fab fa-facebook-messenger" id="icon-msg"></i>
                <i className="fas fa-bell" id="icon-notification"></i>
                <div className="request-wrapper hidden" id="friend-box">
                    <ul>
                        <section id="reqs">
                         Friend Requests   
                        </section>
                    </ul>
                    <h4>No New Friend Requests</h4>
                </div>
                <div className="msg-box" >
                    <ul>
                    <section id="msgs">
                        Friend Requests
                        </section>
                    </ul>
                <h4>No New Friend Requests</h4>
                </div>
            </div>
        )
    }
}

export default Icons;