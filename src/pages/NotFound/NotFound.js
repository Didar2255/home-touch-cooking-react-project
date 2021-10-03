import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error'>
            <img src="https://vetra.laborasyon.com/assets/svg/404.svg" alt="" />
            <h1>Page not found</h1>
            <p>The page you want to go is not currently available</p>
            <Link to='/home'>
                <Button className='bg-danger border border-0'>Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;