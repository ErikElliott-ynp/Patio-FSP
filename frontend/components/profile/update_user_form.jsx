import React from "react";
import { withRouter } from "react-router";

class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            work: this.props.user.work,
            education: this.props.user.education,
            location: this.props.user.location,
            aboutMe: this.props.user.aboutMe,
            id: this.props.user.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault;

        const user = Object.assign({}, this.state, )
        this.props.updateUserInfo(user).then(this.props.closeModal)
    }

    render () {
        
        const { work, education, location, aboutMe, id } = this.props.user;
        const info = {work, education, location, aboutMe, id}; 
        const checkState = Object.assign({}, this.state);
        const disabled = JSON.stringify(checkState) === JSON.stringify(info) ? "disabled" : ""; 


        return (
            <div className="update-wide">
                <form onSubmit={this.handleSubmit} className="update-form">
                    <textarea onChange={this.handleChange("aboutMe")} id="update-TA" className="update-TA" value={this.state.aboutMe}></textarea>
                    <input onChange={this.handleChange("location")} type="text" className="update-info loc" value={this.state.location}/>
                    <input onChange={this.handleChange("work")} type="text" className="update-info work" value={this.state.work}/>
                    <input onChange={this.handleChange("education")} type="text" className="update-info edu" value={this.state.education}/>
                    <input type="submit" className={`update-sub ${disabled}`} id="update-submit" value="Save"/>
                </form>
            </div>
        )
    }
}

export default withRouter(UpdateUserForm);