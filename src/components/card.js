import React from 'react';
import H3 from '../components/h3';
import Button from '../components/button';


const Card = (props) => {
    console.log(props.complete)
    return (

        <div className="card">
            <div className="card-header">
                {props.date}
            </div>
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
            </div>
            {  !props.complete &&
                <Button onClick={(event) => props.updateNote(event, props.id, props.index) }>
                    Mark as completed
                </Button>
            }

            {   props.complete &&
                <Button onClick={(event) => props.updateNote(event, props.id, props.index)} color="green">
                    Complete / Delete
                </Button>

            }
        </div>

    )
}

export default Card;