import React, { Component } from 'react'

export default class PasswordModal extends Component {
    

    render() {
        return(
            <form id="app" class="ui-modal" data-state="idle" autocomplete="off">
                <div class="ui-icon">
                    <div class="ui-lock"></div>
                </div>
                <div class="ui-title">This link is password-protected</div>
                <div class="ui-subtitle">
                    <span data-show="idle">
                    Please enter the password to view this link.
                    </span>
                    <span data-show="validating">
                    Validating...
                    </span>
                    <span data-show="error" class="ui-error">
                    Invalid password
                    </span>
                    <span data-show="success">
                    <a class="ui-link" href="https://xstate.js.org" target="_blank">xstate.js.org</a>
                    </span>
                </div>
                <div class="ui-password">    
                    <input type="password" name="" id="" class="ui-password-input" placeholder="the password is password" />
                </div>
                <button class="ui-submit">Submit</button>
                <button class="ui-reset" type="button" title="Reset"></button>
            </form>
        )
    }
}