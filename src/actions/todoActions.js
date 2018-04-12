import axios from 'axios';
import constants from '../constants';
import * as types from './actionTypes';


export const createTodoSuccess = (todo) => {
    type: types.CREATE_TODO,
    todo
}

export const fetchTodos = (todos) => {
    type: types.FETCH_TODOS,
    todos`  `
}

export const editTodoSuccess = (todo) => {
    type: types.EDIT_TODO,
    todo
}

export const deleteTodoSuccess = (id) => {
    type: types.DELETE_TODO
    id
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

export const listTodos = () => {
    let userId = localStorage.getItem('userId');
    axios.get(`https://todouserapi.herokuapp.com/api/user/todos/${userId}`)
        .then((response) => {
            this.setState({
                todos: response.data.todo
            })
        })
        .catch((err) => {
            if (err) {
            }
        }); 
}

export const updateNote = (e, id, index) => {
    e.preventDefault();
    let userId = localStorage.getItem('userId');
    axios.put(`https://todouserapi.herokuapp.com/api/${id}/todo/${userId}`, {complete: true})
        .then((response) => {
            const allTodos = Object.assign(this.state.todos);
            allTodos[index] = response.data
            this.setState({todos: allTodos});
        })
        .catch((err) => {
            if (err) {
            }
        }); 
}

export const deleteTodo = (e, id, index) => {
    e.preventDefault();
    let userId = localStorage.getItem('userId');
    axios.delete(`https://todouserapi.herokuapp.com/api/${id}/todo/${userId}`)
        .then((response) => {
            const allTodos = Object.assign(this.state.todos);
            allTodos.splice(index, 1);
            this.setState({todos: allTodos});
        })
        .catch((err) => {
            if (err) {
            }
        }); 
}


