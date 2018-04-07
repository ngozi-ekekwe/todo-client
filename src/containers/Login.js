import React, { Component } from 'react';
import Modal from '../components/modal';
import Auth from '../components/auth';
import H3 from '../components/h3';
import Button from '../components/button';
import * as userActions from '../actions/userActions'

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            buttonText: "Log in"
        }

        this.emailchangeState = this.emailchangeState.bind(this);
        this.passwordChangeState = this.passwordChangeState.bind(this);
        this.login = this.login.bind(this);
    }

    emailchangeState(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

    passwordChangeState(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    login() {
        userActions.loginUser(this.state);
        this.setState({
            buttonText: "...loading"
        })
    }
    render() {
        return (
            <div>
                <Modal button="Need an account? Sign up" link="/signup">
                    <H3 tag="Log in into your account" />
                    <Auth onEmailChange={this.emailchangeState} onPasswordChange={this.passwordChangeState} />
                    <Button onClick={this.login}>
                        {this.state.buttonText}
                    </Button>
                </Modal>
            </div>
        )
    }
}