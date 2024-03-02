import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../Assets/Images/main-logo.png';
import HamburgerMenu from '../Assets/Images/Hamburger_icon.svg.png';
import MyPhoto from '../Assets/Images/sivakrishna.png'
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const [hamburger, SetHamburger] = useState(false)
    const navigate = useNavigate();

    const sendToHome = () => {
        navigate('/')
    }

    const handleHamburger = () => {
        SetHamburger(!hamburger)
    }

    return (
        <div className="nav-main-container">
        <div className="container p-0">
        <nav>
            <img src={logo} alt="LOGO" className="site-logo" onClick={sendToHome}/>
            <img src={HamburgerMenu} alt="LOGO" className="hamburger-menu d-lg-none" onClick={handleHamburger} />
            <div className="nav-items-container d-none d-lg-flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/websites">Websites</NavLink>
            </div>
        </nav>

        <div className={`d-lg-none hamburger-main-container ${hamburger ? `hamburger-active`: ``}`}>
            <div className="header-section">
                <img src={MyPhoto} alt="LOGO" className="hamburger-my-photo"/>
                <i class="bi bi-x-lg" onClick={handleHamburger}></i>
            </div>

            <div className="mobile-menu-items">
                <NavLink to="/" onClick={handleHamburger}>Home</NavLink>
                <NavLink to="/about" onClick={handleHamburger}>About</NavLink>
                <NavLink to="/projects" onClick={handleHamburger}>Projects</NavLink>
                <NavLink to="/websites" onClick={handleHamburger}>Websites</NavLink>
            </div>

            <div className="hamburger-social-icons">
                <i class="bi bi-youtube"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-github"></i>
            </div>
        </div>
        
        </div>
        </div>
    );
}

export default Navbar;