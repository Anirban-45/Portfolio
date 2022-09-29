import React from 'react';
import '../styles/Navbar.css'
import {NavLink} from 'react-router-dom'
import stingray from '../assets/stingray.png'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'


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
                    <div className="menu-toggle">
                        <FaBars className="hamburger"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
