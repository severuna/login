import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {

    useEffect(() => {
        console.log('page load');
    }, []);
    
    return (
        <div className='header row'>
            <Link to='login' className='header-item'>Login</Link>
            <Link to='login/register' className='header-item'>Register</Link>
        </div>
    );
};

export default NavBar;