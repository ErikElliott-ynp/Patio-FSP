import React from "react";



class SignupForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: "",
            sex: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(() => this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            sex: "",
        })).then(() => this.props.history.push('/feed'))
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleRadio(e) {
        this.setState( { 'sex': e.target.value } )
    }

    render(){
        const errors = this.props.errors

        if (errors.includes("First name can't be blank")) {
            document.getElementById('signup-names').classList.remove('hidden');
        }
        return (
            <div className="signup-max">
                <div className="left-side">
                    <h2 className="outline">Your Friends are all here</h2>
                    <h3 className="tagline outline">Connect with friends and family on Patio</h3>
                    <h3 className="outline hook"><strong>See Photos and Updates </strong>from friends</h3>
                    <h3 className="outline hook"><strong>Share what's new </strong>in your life</h3>
                </div>
                <div className="signup-info">
                    <div className="names signup-errors hidden" id="signup-names">
                        <p>First Name can't be blank</p>
                    </div>

                    <div className="lname sign-errors" id="lname">
                        <p>Last Name can't blank</p>
                    </div>
                    <h2 className="outline">Sign Up</h2>
                    <p className="outline">It's quick and easy</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-names">
                            <input className="fn-input-box" onChange={this.handleChange('firstName')} type="text" placeholder="   First Name" value={this.state.firstName}/>
                            <input className="ln-input-box" onChange={this.handleChange('lastName')} type="text" placeholder="   Last Name" value={this.state.lastName}/>
                        </div>
                        <input className="email-input-box" onChange={this.handleChange('email')} type="text" placeholder="   Email" value={this.state.email}/>
                        <input className="pw-input-box" onChange={this.handleChange('password')} type="password" placeholder="   New Password" value={this.state.password}/>
                        <label className="bday-text"><h4 className="outline">Birthday</h4>
                            <input onChange={this.handleChange('dateOfBirth')} value={this.state.dateOfBirth} min="1905-01-01" max="2006-11-04" type="date" id="bday" className="bday-box" required/>
                        </label>
                        <div className="gender-buttons">
                            <h4 className="outline">Sex:</h4>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="male" id="male" /><p className="outline">Male</p><br/>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="female" id="female" /><p className="outline">Female</p><br/>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="other" id="other" /><p className="outline">Other</p>
                        </div>
                        <input className="sign-up-button" type="submit" value="Sign Up!"/>
                        <button className="sign-up-button demo" type="submit">Demo User</button>
                    </form>
                </div>
            </div>
        )
    }
}



export default SignupForm;