import React, { Component} from 'react';

class Header extends Component  {
 
    componentDidMount() {
        let token = localStorage.getItem('token');
        if (!token) {
            window.location = "/signup";
        }
    }
    render () {
        return(
            <header>
                <nav className="navbar navbar-expand-lg  bg-light">
                    <a href="/"className="navbar-brand">TODO-APP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">

                         <li class="nav-item">
                            <a class="nav-link" href="/">ADD TODO</a>
                        </li>

                         <li class="nav-item">
                            <a class="nav-link" href="/todos">SAVED TODOS</a>
                        </li>    
                        <li class="nav-item">
                            <a class="nav-link" href="/login" onClick={(e) => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('userId');

                            }}>LOG OUT</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;