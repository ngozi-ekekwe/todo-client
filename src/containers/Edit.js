import React, { Component } from 'react';
import Header from '../common/header';
import Modal from '../components/modal';
import Button from '../components/button';
import Todo from '../components/todoForm';
import H3 from '../components/h3';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            dayMarkedForCompletion: "",
            buttonText: "Update Todo"
        }

        this.titleChange = this.titleChange.bind(this);
        this.UpdateTodo = this.UpdateTodo.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    titleChange(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    UpdateTodo(e, index) {
        e.preventDefault();
        let userId = localStorage.getItem('userId');
        let id =  this.props.match.params.id
        this.setState({
            buttonText: "...Updating"
        })
        let body = {
            title: this.state.title, 
            dayMarkedForCompletion: this.state.dayMarkedForCompletion
        }
        axios.put(`https://todouserapi.herokuapp.com/api/${id}/todo/${userId}`, body)
            .then((response) => {
                window.location = "/todos"
            })
            .catch((err) => {
                if (err) {
                }
            }); 
    }

    onDateChange(e) {
        this.setState({
            dayMarkedForCompletion: e.target.value
        })  
    }

    render() {
        return (
            <div>
                <Header />
                <Modal button="MY TODOS" link="/todos">
                    <H3 tag="Edit Todo" />
                    <Todo onEmailChange={this.emailchangeState} titleChange={this.titleChange} onSubmit={this.createTodo} onDateChange={this.onDateChange} />
                    <Button onClick={this.UpdateTodo}>
                        {this.state.buttonText}
                    </Button>
                </Modal>
            </div>
        )
    }
}