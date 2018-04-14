import React from 'react';


const Todo = (props) => {
    return (
        <form  method="post" onSubmit={props.onSubmit}>
            <div className="row">
                <input type="text" className="form-control" placeholder="todo" onChange={props.titleChange} />
            </div>     
        </form>
    )
}

export default Todo;