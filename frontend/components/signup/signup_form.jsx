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
                <div className="img-slogan">
                    <h2>Connect with friends and family on The Patio.</h2>
                    <div className="iconic">
                        
                    </div>
                </div>
                <div className="signup-info">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange('firstName')} type="text" placeholder="First Name" value={this.state.firstName}/>
                        <input onChange={this.handleChange('lastName')} type="text" placeholder="Last Name" value={this.state.lastName}/>
                        <input onChange={this.handleChange('email')} type="text" placeholder="Email" value={this.state.email}/>
                        <input onChange={this.handleChange('password')} type="password" placeholder="New Password" value={this.state.password}/>
                        <input type="date" name="" id="bday" className="bday-box"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;