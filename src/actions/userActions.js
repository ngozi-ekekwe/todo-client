import axios from 'axios';
import constants from '../constants';


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


