import axios from 'axios';
import constants from '../constants';
import * as types from './actionTypes';


export const createTodoSuccess = (todo) => {
    type: types.CREATE_TODO,
    todo
}

export const editTodoSuccess = (todo) => {
    type: types.CREATE_TODO,
    todo
}

export const deleteTodoSuccess = () => {
    type: types.DELETE_TODO
}

export const updateTodoSucess = (todo) => {
    type: types.UPDATE_COMPLETE_TODO
}

 
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

