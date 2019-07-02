import React, {Component} from 'react';

function Header() {
    return(
        <header>
            <nav className="nav">
                <ul className="nav--list">
                    <li className="nav--item">
                        <a className="nav--link" href="">Home</a>
                    </li>
                    <li className="nav--item">
                        <a className="nav--link" href="">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;