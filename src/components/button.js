import React from 'react';

const Button = (props) => {
    return (
        <div className="button-wrapper row">
            <button type="button"  className="btn btn-primary full-button" onClick={props.onClick} style={{backgroundColor: `${props.color}`}}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;