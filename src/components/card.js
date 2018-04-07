import React from 'react';
import H3 from '../components/h3';
import Button from '../components/button';


const Card = (props) => {
    return (

        <div className="card">
            <div className="card-header">
                {props.date}
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="" onClick={(event) => props.delete(event, props.id, props.index)}>X</a>
                    </li>
                </ul>
                
            </div>
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
            </div>
            {  !props.complete &&
                <Button onClick={(event) => props.updateNote(event, props.id, props.index) }>
                    COMPLETE TODO
                </Button>
            }

            {   props.complete &&
                <Button onClick={(event) => props.updateNote(event, props.id, props.index)} color="green">
                    COMPLETE
                </Button>

            }
        </div>

    )
}

export default Card;