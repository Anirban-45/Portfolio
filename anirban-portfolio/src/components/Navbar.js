import React from 'react';
import '../styles/Navbar.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Router>
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/work">Work</Link>
                        <Link to="/contact">Contact</Link>
                    </Router>
                </div>
            </nav>
        </>
    )
}

export default Navbar
