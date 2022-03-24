/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div>
                <img src={logo} alt="" />
                </div>
                <div>
                <a href="/Home">Home</a>
                <a href="/Home">About</a>
                <a href="/Home">Shop</a>
                <a href="/Home">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;