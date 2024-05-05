import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <div className='flex gap-5 justify-center m-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default NavBar;