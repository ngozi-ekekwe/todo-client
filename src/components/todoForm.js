import React from 'react';
import queryString from 'query-string';

const Todo = (props) => {
    const title = queryString.parse(window.location.search).title;
    const date = queryString.parse(window.location.search).date;
    const param = new Date(date).getTime()
    const newdate = new Date(param).toLocaleString().split("/");
    const defaultDate = date ?  newdate[2].slice(0,4) + "-" +  newdate[0] + "-" + newdate[1] : ""

    return (
        <form  method="post" onSubmit={props.onSubmit}>
            <div className="row">
                <input type="text" className="form-control" placeholder="todo" onChange={props.titleChange} defaultValue={title} />
            </div> 

            <div className="row">
                <label>Completion date:</label>
                <input type="date" className="form-control" placeholder="todo" onChange={props.onDateChange} defaultValue={defaultDate}/>
            </div>       
        </form>
    )
}

export default Todo;