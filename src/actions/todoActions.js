import axios from 'axios';
import constants from '../constants';

export const createTodo = (todo) => {
    let userId = localStorage.getItem('userId');
    axios.post(`https://todouserapi.herokuapp.com/api/todo/${userId}`, todo)
        .then((response) => {
            if (response.data) {
                window.location = "/todos"
            }
        })
        .catch((err) => {
            if (err) {
            }
        }); 
}

export const listTodos = () => {
    axios.get(constants.LIST_TODO)
        .then((response) => {
            return response.data.message
        })
        .catch((err) => {
            if (err) {
            }
        }); 
}

