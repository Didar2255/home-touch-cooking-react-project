import React from 'react';
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react'
import DisplayFood from '../../components/DisplayFood/DisplayFood';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('./homeData.JSON')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container className='my-4'>
                <div>
                    <p className='info'>Our Best Cooking Classes</p>
                    <h1 className='my-3 heading'>Popular Classes</h1>
                </div>
                <hr />
                <Row xs={1} md={3} className="g-4">
                    {
                        foods.map(food => <DisplayFood
                            key={food.id}
                            food={food}>

                        </DisplayFood>)
                    }
                </Row>
                <Link to='/service'>
                    <Button className='bg-danger border border-0 my-3'>ALL CLASSES</Button>
                </Link>
                <div className='my-5'>
                    <p className='info'>Our best cooking classes</p>
                    <h1 className='mb-4 heading'>Food Blog</h1>
                    <hr />
                    <div className='d-flex align-items-center justify-content-between '>
                        <div className='blog-img'>
                            <img src="https://image.freepik.com/free-photo/grilled-beef-steak-dark-wooden-surface_1150-44344.jpg" alt="" />
                        </div>
                        <div className='ms-5'>
                            <h2>7 Steps for Grilling Meat</h2>
                            <p>Grilling meat is a pretty basic concept. It’s grilling meat well that gets more complicated — but not much, once you commit these meat commandments to memory.</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                        <div className='me-5'>
                            <h2>Classic Apple Pie</h2>
                            <p>This recipe guarantees apple pie with perfectly cooked (not mushy) apples surrounded by a thickened and gently spiced sauce all baked inside a flaky, golden-brown crust.</p>

                        </div>
                        <div className='blog-img'>
                            <img src="https://image.freepik.com/free-photo/tasty-apple-pie-dish_176420-3601.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;