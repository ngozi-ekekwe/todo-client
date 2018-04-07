import React, { Component } from 'react';
import Header from '../common/header';
import Modal from '../components/modal';
import H3 from '../components/h3';
import Card from '../components/card'
import axios from 'axios';
import moment from 'moment'

export default class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.listTodos = this.listTodos.bind(this);
        this.updateNote = this.updateNote.bind(this);

        
    }

    componentDidMount() {
        this.listTodos()
    }

    listTodos() {
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

    updateNote(e, id, index) {
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

    delete(e, id, index) {
        e.preventDefault();
        let userId = localStorage.getItem('userId');
        axios.delete(`https://todouserapi.herokuapp.com/api/${id}/todo/${userId}`)
            .then((response) => {
            })
            .catch((err) => {
                if (err) {
                }
            }); 
    }

    render() {
        return (
            <div>
                <Header />
                    <div>

                    {  this.state.todos &&
                        <div className="movies-display"> 
                            {
                            this.state.todos.map((result, key) => {
                                    return (
                                        <a href="" key={key} className="movie-card">
                                            <Card 
                                                index={key} 
                                                id={result.id} 
                                                title={result.title} 
                                                date={moment(result.createdAt).format('MMM D, YYYY')} 
                                                updateNote={this.updateNote} 
                                                complete={result.complete}
                                                delete={this.delete} />
                                        </a>
                                    )
                                })
                            }
                        </div>

                    }
                    {  this.state.todos.length === 0 &&
                        <Modal button="START ADDING TODOS ROCKSTAR" link="/">
                            <H3 tag="You are almost there" />
                        </Modal>
                    }

                    </div>
            </div>
        )
    }
}