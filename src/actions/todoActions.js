import axios from 'axios';
import constants from '../constants';
const BASE_URL ="https://todouserapi.herokuapp.com";

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
    let userId = localStorage.getItem('userId');
    axios.get(constants.LIST_TODO)
        .then((response) => {
            return response.data.message
        })
        .catch((err) => {
            if (err) {
            }
        }); 
}



export const updateTodo = () => {

}

export const deleteTodo = () => {

}