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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleRadio(e) {
        this.setState( { 'sex': e.target.value } )
    }

    render(){
        return (
            <div className="signup-max">
                <div className="left-side">
                    <h2 className="outline">Your Friends are all here</h2>
                    <div className="img-slogan">
                        <div className="iconic">
                            <h3 className="tagline outline">Connect with friends and family on The Patio.</h3>
                            <h3 className="outline hook"><strong>See Photos and Updates </strong>from friends and <strong>Share what's new </strong>in your life</h3>
                        </div>
                    </div>
                </div>
                <div className="signup-info">
                    <h2 >Sign Up</h2>
                    <p>It's quick and easy</p>
                    <form className="" onSubmit={this.handleSubmit}>
                        <div className="signup-names">
                            <input className="fn-input-box" onChange={this.handleChange('firstName')} type="text" placeholder="   First Name" value={this.state.firstName}/>
                            <input className="ln-input-box" onChange={this.handleChange('lastName')} type="text" placeholder="   Last Name" value={this.state.lastName}/>
                        </div>
                        <input className="email-input-box" onChange={this.handleChange('email')} type="text" placeholder="   Email" value={this.state.email}/>
                        <input className="pw-input-box" onChange={this.handleChange('password')} type="password" placeholder="   New Password" value={this.state.password}/>
                        <label className="bday-text"><h4 className="outline">Birthday</h4>
                            <input onChange={this.handleChange('dateOfBirth')} value={this.state.dateOfBirth} min="1905-01-01" max="2006-11-04" type="date" id="bday" className="bday-box" />
                        </label>
                        <div className="gender-buttons">
                            <h4 className="outline">Sex:</h4>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="male" id="male" /><p className="outline">Male</p><br/>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="female" id="female" /><p className="outline">Female</p><br/>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="other" id="other" /><p className="outline">Other</p>
                        </div>
                        <input className="sign-up-button" type="submit" value="Sign Up!"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;