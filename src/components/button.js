import React from 'react';

const Button = (props) => {
    return (
        <div className="button-wrapper row">
            <button type="submit" className="btn btn-primary full-button" onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;