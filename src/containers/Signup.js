import React, { Component } from 'react';
import Modal from '../components/modal';
import Auth from '../components/auth';
import H3 from '../components/h3';
import Button from '../components/button';
import * as userActions from '../actions/userActions'

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            buttonText: "Sign up"
        }

        this.emailchangeState = this.emailchangeState.bind(this);
        this.passwordChangeState = this.passwordChangeState.bind(this);
        this.createUser = this.createUser.bind(this);
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

    createUser() {
        userActions.createUser(this.state);
        this.setState({
            buttonText: "...loading"
        })
    }
    
    render() {
        return (
            <div>
                <Modal button="Already have an account? login" link="/login">
                    <H3 tag="create an account" />
                    <Auth onEmailChange={this.emailchangeState} onPasswordChange={this.passwordChangeState} />
                    <Button onClick={this.createUser}>
                        {this.state.buttonText}
                    </Button>
                </Modal>
            </div>
        )
    }
}