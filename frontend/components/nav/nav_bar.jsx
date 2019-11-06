import React from "react";
import { Link } from "react-router-dom";


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
        this.hideErrors();
        this.props.login(this.state).then((user) => this.props.history.push(`/users/${user.id}`)).then(() => this.setState({
            email: "",
            password: ""
        }))
    }

    hideErrors() {
        document.getElementsByClassName('errors')[0].classList.add('hidden');
    }

    handleChange(field) {
        return (e) => this.setState( { [field]: e.target.value })
    }
    render () {
        const errors = this.props.errors.map( error => {
            return error;
        });
        if (this.props.errors[0] === "Invalid Username or Password") {
            const navErrorsBox = document.getElementsByClassName('errors')[0];
            navErrorsBox.classList.remove('hidden');
        }
        return (
            <div className="nav-bar">
                <div className="nav-flex">
                    {
                        this.props.loggedIn ? (
                            <div className="logged-in-bar">
                                <div className="left-logged-in">
                                    <Link to="/feed" style={{ textDecoration: 'none' }}>
                                        <div className="logo-logged-in">
                                            <h2 className="the-p">P</h2>
                                        </div>
                                    </Link>
                                    <input className="search-bar" type="text" placeholder="Search"/>
                                    <i className="fa fa-search"></i>
                                </div>
                                <div className="right-logged-in">
                                    <Link to={`/users/${this.props.currentUser.id}`} style={{ textDecoration: 'none' }}>
                                        <div className="info-blip">
                                            <p>
                                                {this.props.currentUser.firstName}
                                            </p>
                                        </div>
                                    </Link>
                                    <button onClick={() => this.props.logout()} className="action-button logout clearfix">Log Out</button>
                                </div>
                            </div>
                        ) : (
                            <div className="login-bar">
                                <div className="errors hidden">
                                    <p>{errors}</p>
                                </div>
                                <div className="logo-box clearfix">
                                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="logo clearfix" >Patio</h1></Link>
                                </div>
                                <div className="submission-form clearfix">
                                    <form onSubmit={this.handleSubmit}>
                                        <div>
                                                <span className="signin-text outline">Email</span>
                                                <span className="pass-text outline">Password</span>
                                        </div>
                                        <div className="signin-inputs-cont clearfix">
                                            <input className="signin-input-box" onChange={this.handleChange('email')} type="text" value={this.state.email}/>
                                            <input className="signin-input-box" onChange={this.handleChange('password')} type="password" value={this.state.password}/>                    
                                            <input className="action-button" type="submit" value="Log In"/>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NavBar;