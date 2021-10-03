import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllRecipe from '../../components/AllRecipe/AllRecipe';
import Header from '../../components/Header/Header';
import './CookingClass.css'

const CookingClass = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container className='my-5'>
                <h2 className='main'>Choose Your Classes !</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        recipes.map(recipe => <AllRecipe
                            key={recipe.id}
                            recipe={recipe}
                        >

                        </AllRecipe>)
                    }
                </Row>
                <div className="for-chef d-flex align-item-center justify-content-between my-4 rounded">
                    <div>
                    </div>
                    <div className='p-5'>
                        <h1>Want To Be a Chef ?</h1>
                        <p>Our Cooking School offer a variety of classes for students of all levels.</p>
                        <button className='btn btn-danger'>SEND REQUEST</button>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default CookingClass;