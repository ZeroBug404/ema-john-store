/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/orders"}>Orders</Link>
                    <Link to={"/about"}>About</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Header;