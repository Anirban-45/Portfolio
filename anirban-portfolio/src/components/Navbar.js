import React from 'react';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import stingray from '../assets/str-logo.png'

const linkStyle = {
  margin: "1.5rem",
  textDecoration: "none",
  color: 'white'
};

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
                        <Link to="/" style={linkStyle}>Home</Link>
                        <Link to="/about" style={linkStyle}>About</Link>
                        <Link to="/work" style={linkStyle}>Work</Link>
                        <Link to="/contact" style={linkStyle}>Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
