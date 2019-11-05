import React from "react";

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
    }

    handleChange(field) {
        return (e) => this.setState( { [field]: e.target.value })
    }
    render () {

        return (
            <div className="nav-bar">
                {
                    this.props.loggedIn ? (
                        <div className="logged-in-bar">
                            
                        </div>
                    ) : (
                        <div className="sign-in-bar">
                            <h1>The Patio</h1>
                            <form onSubmit={this.handleSubmit}>
                                <label>Email
                                    <input onChange={this.handleChange('email')} type="text" value={this.state.email}/>
                                </label>
                                <label>Password
                                    <input onChange={this.handleChange('password')} type="password" value={this.state.password}/>password                     
                                </label>
                                <input type="submit" value="Log In"/>
                            </form>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default NavBar;