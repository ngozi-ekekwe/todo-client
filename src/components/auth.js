import React from 'react';

const Auth = (props) => {
    return (
        <form action="/login" method="post" >
            <div className="row">
                <input type="text" className="form-control" placeholder="email" onChange={props.onEmailChange} />
            </div>  
             <div className="row">
                <input type="password" className="form-control" placeholder="password" onChange={props.onPasswordChange} />
            </div> 
        </form>
    )
}

export default Auth;