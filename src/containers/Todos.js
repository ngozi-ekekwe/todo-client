import React, { Component } from 'react';
import Header from '../common/header';
import Modal from '../components/modal';
import Button from '../components/button';
import Todo from '../components/todoForm';
import H3 from '../components/h3';
import Card from '../components/card'
import * as todoActions from '../actions/todoActions'
import axios from 'axios';
import constants from '../constants';



export default class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.listTodos = this.listTodos.bind(this);

        
    }

    componentDidMount() {
        this.listTodos()
    }

    listTodos() {
        let userId = localStorage.getItem('userId');
        axios.get(constants.LIST_TODO)
            .then((response) => {
                this.setState({
                    todos: response.data.message
                })
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
                <div className="movies-display"> 
                {
                    this.state.todos.map((result, key) => {
                        console.log(result)
                        return (
                            <div key={key} className="movie-card">
                                <Card  title={result.title}/>
                            </div>
                        )
                    })
                }
                </div>

                <Modal button="ADD TODO" link="/" style={{backgroundColor: "#007bff"}}>
                    
                </Modal>
            </div>
        )
    }
}