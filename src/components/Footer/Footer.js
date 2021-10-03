import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="row">
                <div className="col-md-4 footer-border">
                    <h2>About Us</h2>
                    <h2 className='text-danger' style={{ fontFamily: 'cursive' }}>RANNA GHOR</h2>
                    <h6>Cooking is a subscription service of The New York Times. It is a digital cookbook and cooking guide alike, available on all platforms, that helps home cooks of every level discover, save and organize the world’s best recipes</h6>
                </div>
                <div className="col-md-4 footer-border">
                    <h2>Learn more</h2>
                    <p>Subscribe</p>
                    <p>Customer Service</p>
                    <p>Jobs</p>
                    <p>Advartise</p>
                </div>
                <div className="col-md-4">
                    <h2>Connect</h2>
                    <p>Follow us</p>
                    <div className='social-media'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                    </div>
                    <Button className='btn-light border-danger my-2'>Global Communitis</Button>
                </div>
            </div>
            <p>&copy; copyright made by didar</p>
        </div>
    );
};

export default Footer;