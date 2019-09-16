import React from "react";
import './logo.css';
import logo from '../../../../assets/images/logo.svg';

// Stateless Functional Component

const Logo = () => {
    return (
        <img src={logo} className="sidebar__logo" alt="logo" />
    );
}

export default Logo;