import React, { Component} from 'react';

class Header extends Component  {

    constructor(props) {
        super(props);
    }

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

                         <li className="nav-item">
                            <a className="nav-link" href="/">ADD TODO</a>
                        </li>

                         <li className="nav-item">
                            <a className="nav-link" href="/todos">SAVED TODOS</a>
                        </li>     
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">LOG OUT</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header;