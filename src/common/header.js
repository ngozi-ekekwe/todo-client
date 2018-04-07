import React from 'react';

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                   
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign out</a>
                    </li>
                   
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;