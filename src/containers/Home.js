import React, { Component } from 'react';
import Header from '../common/header';
import Modal from '../components/modal';
import Button from '../components/button';
import Todo from '../components/todoForm';
import H3 from '../components/h3';
import * as todoActions from '../actions/todoActions'

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            buttonText: "Add Todo"
        }

        this.titleChange = this.titleChange.bind(this);
        this.createTodo = this.createTodo.bind(this);
    }

    titleChange(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    createTodo() {
        todoActions.createTodo(this.state);
        this.setState({
            buttonText: "...loading"
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <Modal button="MY TODOS" link="/todos">
                    <H3 tag="create todo" />
                    <Todo onEmailChange={this.emailchangeState} titleChange={this.titleChange} />
                    <Button onClick={this.createTodo}>
                        {this.state.buttonText}
                    </Button>
                </Modal>
            </div>
        )
    }
}