import React from "react";

class Icons extends React.Component {
    constructor(props) {
        super(props)
        this.handleIcons = this.handleIcons.bind(this);
    }

    handleIcons(elementId, iconId) {
        this.resetIcons(iconId);
        this.hideBoxes(elementId);
        let ele = document.getElementById(elementId)
        let classArray = Array.from(ele.classList);
        let icon = document.getElementById(iconId)
        if (classArray.includes("hidden")) {
            ele.classList.remove('hidden');
            icon.style.color = 'white';
        } else {
            ele.classList.add('hidden');
            icon.style.color = "rgb(58, 56, 56)"
        }
    }

    resetIcons(iconId) {
        let friend = document.getElementById('icon-friend');
        let msg = document.getElementById('icon-msg');
        let note = document.getElementById('icon-note');
        let icons = [friend, msg, note];
        const skip = document.getElementById(iconId);
        icons.forEach( icon => {
            if (icon !== skip && icon.style.color === 'white') {
                icon.style.color = "rgb(58, 56, 56)";
            }
        })
    }

    hideBoxes(elementId) {
        let friend = document.getElementById('friend-box');
        let msg = document.getElementById('msg-box');
        let note = document.getElementById('note-box');
        let boxes = [friend, msg, note];
        const skip = document.getElementById(elementId);
        boxes.forEach(box => {
            let classArray = Array.from(box.classList);
            if (box !== skip && !classArray.includes('hidden')) {
                box.classList.add("hidden");
            }
        })
    }



    

    render () {
        return (
            <div className="icons-cont">
                <i onClick={() => this.handleIcons('friend-box', 'icon-friend')} className="fas fa-user-friends" id="icon-friend"></i>
                <i className="fab fa-facebook-messenger" onClick={() => this.handleIcons('msg-box', 'icon-msg')} id="icon-msg"></i>
                <i className="fas fa-bell" onClick={() => this.handleIcons('note-box', 'icon-note')} id="icon-note"></i>
                <div className="request-wrapper hidden" id="friend-box">
                    <ul>
                        <section id="reqs">
                         Friend Requests   
                        </section>
                    </ul>
                    <h4>No New Friend Requests</h4>
                </div>
                <div className="msg-wrapper hidden" id="msg-box" >
                    <ul>
                    <section id="msgs">
                        Messages
                        </section>
                    </ul>
                <h4>There's nothing here</h4>
                </div>
                <div className="note-wrapper hidden" id="note-box" >
                    <ul>
                    <section id="notes">
                        Notifications
                        </section>
                    </ul>
                <h4>You're all caught up!</h4>
                </div>
            </div>
        )
    }
}

export default Icons;