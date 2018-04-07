import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                {props.title}
            </div>
        </div>
    )
}

export default Card;