import React, { Component } from 'react'
import SignUpForm from '../components/signup-form'
import SignInForm from '../components/signin-form'

import {Spin, Space} from 'antd'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signupActive : true
        }
        this.toggleForm = this.toggleForm.bind(this)
    }

    toggleForm() {
        console.log('clicked')
        this.setState({signupActive : !this.state.signupActive})
    }

    render() {
        return(
            <React.Fragment>
                {this.state.signupActive ? <SignUpForm toggleForm={this.toggleForm}/> : <SignInForm toggleForm={this.toggleForm}/>}
            </React.Fragment>
        )
    }
}