import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <div className="header d-flex align-items-center justify-content-center">
                <h1 className='title'>Cooking Classes</h1>
            </div>
        </div>
    );
};

export default Header;