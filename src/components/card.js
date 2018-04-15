import React from 'react';
import Button from '../components/button';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                { 
                    props.date
                }
                { props.complete &&
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={(event) => props.delete(event, props.id, props.index)}>
                                <i className="fas fa-trash-alt"></i>
                            </a>
                        </li>
                    </ul> 
                }
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Completion date: <span>{props.date} </span></li>
            </ul>
            <div className="card-body">
                <p className="card-title">{props.title}</p>
            </div>
            {  !props.complete &&
                <Button onClick={(event) => props.completeTodo(event, props.id, props.index) }>
                    COMPLETE TODO 
                </Button>
            }

            {   props.complete &&
                <Button color="green">
                     <i className="fas fa-check"></i>
                </Button>
            }

           
        </div>

    )
}

export default Card;