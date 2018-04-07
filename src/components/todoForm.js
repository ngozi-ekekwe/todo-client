import React from 'react';


const Todo = (props) => {
    return (
        <form action="/login" method="post" role="form">
            <div className="row">
                <input type="text" className="form-control" placeholder="todo" onChange={props.titleChange} />
            </div>  
            
        </form>
    )
}

export default Todo;