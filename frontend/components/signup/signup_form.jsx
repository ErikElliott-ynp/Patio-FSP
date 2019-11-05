import React from "react";



class SignupForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            sex: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    render(){
        return (
            <div className="signup-max">
                <div className="left-side">
                    <h2 className="outline">Your Friends are all here</h2>
                    <div className="img-slogan">
                        <div className="iconic">
                            <h3 className="outline tagline">Connect with friends and family on The Patio.</h3>
                            <h3 className="outline hook"><strong>See Photos and Updates</strong>from friends and <strong>Share what's new </strong>in your life</h3>
                        </div>
                    </div>
                </div>
                <div className="signup-info">
                    <h2>Sign Up</h2>
                    <p>It's quick and easy</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-names">
                            <input onChange={this.handleChange('firstName')} type="text" placeholder="First Name" value={this.state.firstName}/>
                            <input onChange={this.handleChange('lastName')} type="text" placeholder="Last Name" value={this.state.lastName}/>
                        </div>
                        <input onChange={this.handleChange('email')} type="text" placeholder="Email" value={this.state.email}/>
                        <input onChange={this.handleChange('password')} type="password" placeholder="New Password" value={this.state.password}/>
                        <input type="date" name="" id="bday" className="bday-box" />

                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;