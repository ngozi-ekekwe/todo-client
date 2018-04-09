import React from 'react';

const Modal = (props) => {
    return (
        <div className="container">
            <div className="content">
                <div className="panel">
                    {props.children}
                    <a className="panel-footer" href={props.link}>
                        {
                            props.button
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Modal;