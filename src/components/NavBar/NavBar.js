import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <h2 className='text-danger' style={{ fontFamily: 'cursive' }}>RANNA GHOR</h2>
                <Nav className="ms-auto manu-bar">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/service'>Services</NavLink>
                    <NavLink to='/review'>Review</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;