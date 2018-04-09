import axios from 'axios';
import * as types from './actionTypes';
import constants from '../constants';

export const createUserSuccess = (user) => {
    type: types.CREATE_USER,
    user
}

export const loginSuccess = (user) => {
    type: types.LOGIN_USER,
    user
}

export const logoutSuccess = (user) => {
    type: types.LOGOUT_USER,
    user
}


export const createUser = (user) => {
    axios.post(constants.CREATE_USER, user)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.userId)
            if (response.data.token) {
                window.location = "/"
            }
        })
        .catch((err) => {
            if (err) {
                // toastr.error(err)
            }
        }); 
};

export const loginUser = (user) => {
    axios.post(constants.LOG_IN, user)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.userIdentity)
            if (response.data.token) {
                window.location = "/"
            }
        })
        .catch((err) => {
            if (err) {
                // toastr.error(err)
            }
        });
}

export const logout = () => {

}


