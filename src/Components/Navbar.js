import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Assets/Images/logo.jpg';
import {useNavigate} from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    const sendToHome = () => {
        navigate('/')
    }
    return (
        <div className="nav-main-container">
        <div className="container p-0">
        <nav>
            <img src={logo} alt="LOGO" className="site-logo" onClick={sendToHome}/>
            <div className="nav-items-container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/websites">Websites</NavLink>
            </div>
        </nav>
        </div>
        </div>
    );
}

export default Navbar;