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
                <div className='info'>
                    <p>Our Best Cooking Classes</p>
                    <h1 className='my-3'>Popular Classes</h1>
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
            </Container>
        </div>
    );
};

export default Home;