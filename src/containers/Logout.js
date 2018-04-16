import React, { Component } from 'react';
import Modal from '../components/modal';
import Button from '../components/button';
import Todo from '../components/todoForm';
import H3 from '../components/h3';
import * as todoActions from '../actions/todoActions';

export default class Logout extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }

    render() {
        return (
            <div>
                <Modal button="You have successfully terminated your session, click here to log in to your account" link="/login"> 
                </Modal>
            </div>
        )
    }
}
