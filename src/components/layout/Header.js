import React, {Component} from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav className="nav">
                <ul className="nav--list">
                    <li className="nav--item">
                        {/*<a className="nav--link" href="">Home</a>*/}
                        <Link className="nav--link" to="react-todo/">Home</Link>
                    </li>
                    <li className="nav--item">
                        {/*<a className="nav--link" href="">About</a>*/}
                        <Link className="nav--link" to="react-todo/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;