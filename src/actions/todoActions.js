import axios from 'axios';

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

export const listTodos = (userId) => {
   return axios.get(`https://todouserapi.herokuapp.com/api/user/todos/${userId}`)
        
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


