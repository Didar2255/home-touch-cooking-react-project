import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "tomato"
    }
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <h2 className='text-danger' style={{ fontFamily: 'cursive' }}>RANNA GHOR</h2>
                <Nav className="ms-auto manu-bar">
                    <NavLink to='/home' activeStyle={activeStyle}>
                        Home
                    </NavLink>
                    <NavLink to='/service' activeStyle={activeStyle}>
                        Services
                    </NavLink>
                    <NavLink to='/review' activeStyle={activeStyle}>
                        Reviews
                    </NavLink>
                    <NavLink to='/about' activeStyle={activeStyle}>
                        About us
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;