import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import music from '../../images/Music.png';

const Header = () => {

    // style when active
    const activeStyle = {
        fontWeight: "bold",
        color: "white",
        borderBottom: '4px solid white',

    };

    // style of different tabs
    const linkStyle = {
        marginRight: "80px",
        textDecoration: "none",
        color: 'white',
        fontSize: '25px',
        padding: '5px',
    };


    return (
        <div className="header mb-5">
            <div className="logo-cont">
                <img className="logo" src={music} alt="" />
            </div>
            <br />
            <div className=" container navi mt-2">
                <NavLink className="navigation" style={linkStyle} activeStyle={activeStyle}
                    to="/home">Home</NavLink>

                <NavLink className="navigation" style={linkStyle} activeStyle={activeStyle}
                    to="/about">About US</NavLink>

                <NavLink className="navigation" style={linkStyle} activeStyle={activeStyle}
                    to="/services">Services</NavLink>

                <NavLink className="navigation" style={linkStyle} activeStyle={activeStyle}
                    to="/contact">Contact Us</NavLink>
            </div>

        </div>
    );
};

export default Header;