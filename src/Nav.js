import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        textDecoration: 'none'
    }
    return (
        <nav className="navigation">
            <h1>CovidTracker</h1>
            <ul>
                <Link style={navStyle} to="/covidtrackerappp/">
                <li >Global</li>
                </Link>
                <Link style={navStyle} to="/covidtrackerappp/countries">
                <li>Countries</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
