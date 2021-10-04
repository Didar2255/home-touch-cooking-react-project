import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFound.css'
import { useHistory } from "react-router-dom";


const NotFound = () => {
    const history = useHistory()
    const hendelClick = () => {
        history.push('/home')
    }
    return (
        <div className='error'>
            <img src="https://vetra.laborasyon.com/assets/svg/404.svg" alt="" />
            <h1>Page not found</h1>
            <p>The page you want to go is not currently available</p>
            <Button className='bg-danger border border-0' onClick={hendelClick}>Home</Button>
        </div>
    );
};

export default NotFound;