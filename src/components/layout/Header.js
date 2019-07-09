import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav className="nav">
                <ul className="nav--list">
                    <li className="nav--item">
                        {/*<a className="nav--link" href="">Home</a>*/}
                        <Link className="nav--link" to="/">Home</Link>
                    </li>
                    <li className="nav--item">
                        {/*<a className="nav--link" href="">About</a>*/}
                        <Link className="nav--link" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;