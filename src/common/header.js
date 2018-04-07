import React, { Component} from 'react';

class Header extends Component  {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        if (!token) {
            window.location = "/login";
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
                            <a class="nav-link" href="/">Add Note</a>
                        </li>

                         <li class="nav-item">
                            <a class="nav-link" href="/todos">Saved Todos</a>
                        </li>
                       

                        
                        <li class="nav-item">
                            <a class="nav-link" href="/login" onClick={(e) => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('userId');

                            }}>Log out</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;