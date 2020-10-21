import React from 'react'
import Axios from 'axios';
import Spinner from '../util/spinner'
import { XB_ENDPOINTS } from '../constants'

export default class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username : "",
            password : "",
            loading : false,
            error : false
        }

        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }


    handleUserName(e) {
        this.setState({username : e.target.value});
    }

    handlePassword(e) {
        this.setState({password : e.target.value});
    }

    handleFormSubmit() {
        this.setState({error : false})
        
        if(this.state.password ==="") { 
            this.setState({error : true, password : "", message : "please enter password"})
            return;
        }

        
        console.log('Form Data :: ', this.state)

        this.data = {
            username : this.state.username,
            password : this.state.password
        }
        this.setState({loading : true})
        Axios.post(`${XB_ENDPOINTS.BASE_URL}${XB_ENDPOINTS.SIGNIN}`, 
        this.data
        )
        .then(res => {
            localStorage.setItem('userData', res.data)
            this.setState({loading : false})
        })
        .catch(err => {
            if (err.response) {
                // client received an error response (5xx, 4xx)
                this.setState({loading : false,error : true, message : err.response.data.message})
            }else {
                this.setState({loading : false, error : true, message : "Something error occured!"})
            }
        })
    }

    render() {
        return (
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-image">
                            <figure><img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="sing up image" /></figure>
                            <a href="#signup" className="signup-image-link" onClick={this.props.toggleForm}><i className="fa fa-arrow-right" />&emsp;Register Now</a>
                        </div>
                        <div className="signup-form">
                            <h1 className="form-title">Sign In</h1>
                            {this.state.error && <p className="msg msg-error"><i className="fa fa-times-circle-o"/>{this.state.message}</p>}
                            {this.state.success && <p className="msg msg-success"><i className="fa fa-check-circle"/>{this.state.message}</p>}
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="username"><i className="fa fa-user"></i></label>
                                    <input type="text" name="username" id="username" placeholder="Your username" 
                                        onChange={this.handleUserName}
                                        value={this.state.username}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="fa fa-lock"/></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" 
                                        onChange={this.handlePassword}
                                        value={this.state.password}
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="button" name="signin" id="signup" className="form-submit" value="SignIn" onClick={this.handleFormSubmit} disabled={this.state.loading}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.loading && <Spinner />}
            </section>
        )
    }
}
