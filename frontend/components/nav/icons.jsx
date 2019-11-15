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
        let icons;
        icons = Array.from(document.getElementsByClassName('gray')); 
        const skip = document.getElementById(iconId);
        icons.forEach( icon => {
            if (icon !== skip && icon.style.color === 'white') {
                icon.style.color = "rgb(58, 56, 56)";
            }
        })
    }

    hideBoxes(elementId) {
        let boxes;
        boxes = Array.from(document.getElementsByClassName('down'));
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
                <i onClick={() => this.handleIcons('friend-box', 'icon-friend')} className="fas fa-user-friends gray" id="icon-friend"></i>
                <i className="fab fa-facebook-messenger gray" onClick={() => this.handleIcons('msg-box', 'icon-msg')} id="icon-msg"></i>
                <i className="fas fa-bell gray" onClick={() => this.handleIcons('note-box', 'icon-note')} id="icon-note"></i>
                <div className="request-wrapper hidden down" id="friend-box">
                    <ul>
                        <section id="reqs">
                         Friend Requests   
                        </section>
                    </ul>
                    <h4>No New Friend Requests</h4>
                </div>
                <div className="msg-wrapper hidden down" id="msg-box" >
                    <ul>
                    <section id="msgs">
                        Messages
                        </section>
                    </ul>
                <h4>There's nothing here</h4>
                </div>
                <div className="note-wrapper hidden down" id="note-box" >
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