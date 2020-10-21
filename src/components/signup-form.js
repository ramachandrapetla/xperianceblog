import React from 'react'
import Axios from 'axios';
import Spinner from '../util/spinner'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            email : "",
            username : "",
            password : "",
            repass : "",
            loading : false,
            error : false,
            success : false
        }

        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleRePass = this.handleRePass.bind(this)
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }

    handleName(e) {
        this.setState({name : e.target.value});
    }

    handleEmail(e) {
        this.setState({email : e.target.value});
    }

    handleUserName(e) {
        this.setState({username : e.target.value});
    }

    handlePassword(e) {
        this.setState({password : e.target.value});
    }

    handleRePass(e) {
        this.setState({repass : e.target.value});
    }

    handleCheckBox(e) {
        console.log('checkbox')
    }

    handleFormSubmit() {
        this.setState({error : false, success : false})
        if(this.state.name ==="") { 
            this.setState({error : true, name : "",password:"",repass:"", message : "Name can't be empty"})
            return;
        }
        if(this.state.email ==="") { 
            this.setState({error : true, email : "",password:"",repass:"", message : "Email can't be empty"})
            return;
        }
        if(!this.validateEmail(this.state.email)){
            this.setState({error : true, email : "",password:"",repass:"", message : "Invalid Email"})
            return;
        }
        if(this.state.password ==="") { 
            this.setState({error : true, password : "",repass: "", message : "password cant be empty"})
            return;
        }
        if(!this.state.password ===this.state.repass) { 
            this.setState({error : true, password: "", repass : "", message : "Passwords didn't match"})
            return;
        }

        this.REGISTER_ENDPOINT = 'http://localhost:8080/api/auth/signup'
        console.log('Form Data :: ', this.state)

        this.data = {
            name : this.state.name,
            email : this.state.email,
            username : this.state.username,
            password : this.state.password
        }
        this.setState({loading : true})
        Axios.post('http://localhost:8080/api/auth/signup', 
        this.data
        )
        .then(res => {
            this.setState({loading : false, message : "Registration Successful", success : true })
            console.log(res)
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

    validateEmail(mail) 
    {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
            return (true)
        }
        return (false)
    }

    checkPasswordStrength(password) {
        console.log('checking password strength')
    }

    render() {
        return (
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Sign up</h1>
                            {this.state.error && <p className="msg msg-error"><i className="fa fa-times-circle-o"/>{this.state.message}</p>}
                            {this.state.success && <p className="msg msg-success"><i className="fa fa-check-circle"/>{this.state.message}</p>}
                            <form method="POST" className="register-form" id="register-form">
                            
                                <div className="form-group">
                                    <label htmlFor="name"><i className="fa fa-user"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" 
                                        onChange={this.handleName}
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fa fa-envelope" /></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" 
                                        onChange={this.handleEmail}
                                        value={this.state.email}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username"><i className="fa fa-at"></i></label>
                                    <input type="text" name="username" id="username" placeholder="Desired username" 
                                        onChange={this.handleUserName}
                                        value={this.state.username}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="fa fa-lock"/></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" 
                                        onChange={this.handlePassword}
                                        value={this.state.password}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="fa fa-lock"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" 
                                        onChange={this.handleRePass}
                                        value={this.state.repass}
                                        required
                                    />
                                </div>
                                <div className="form-group checkbox">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term">I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="button" name="signup" id="signup" className="form-submit" value="Register" onClick={this.handleFormSubmit} disabled={this.state.loading}/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="sing up image" /></figure>
                            <a href="#signin" className="signup-image-link"  onClick={this.props.toggleForm}><i className="fa fa-arrow-right"/>&emsp;I am already member</a>
                        </div>
                    </div>
                </div>
                {this.state.loading && <Spinner />}
            </section>
        )
    }
}