import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Ranna Ghor</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Services</Nav.Link>
                    <Nav.Link href="#pricing">Review</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;