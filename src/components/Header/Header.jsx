import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav >
            <Link to='/review'>OrderReview</Link>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/grandpa'>Grandpa</Link>
        </nav>
    );
};

export default Header;