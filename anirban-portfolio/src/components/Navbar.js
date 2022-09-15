import React from 'react';
import '../styles/Navbar.css'
import {NavLink} from 'react-router-dom'
import stingray from '../assets/stingray.png'

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src={stingray} alt=""/>
                        Anirban
                    </div>
                    <div className="navbar-item">
                        <NavLink to="/Portfolio" activeClassName="navlinks">Home</NavLink>
                        <NavLink to="/about" activeClassName="navlinks">About</NavLink>
                        <NavLink to="/work" activeClassName="navlinks">Work</NavLink>
                        <NavLink to="/contact" activeClassName="navlinks">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
