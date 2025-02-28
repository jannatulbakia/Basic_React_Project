import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <div className='flex gap-5 justify-center m-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to ='/fetch'>Fetch</Link>
            <Link to ='/todo'>ToDo</Link>
            <Link to ='/photo'>Photo</Link>
            <Link to='/user'>User</Link>
            <Link to='/fetchbooks'>Books</Link>
        </div>
    );
};

export default NavBar;