import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const AllRecipe = (props) => {
    const { foodImage, description, foodName, price } = props.recipe
    return (
        <div>
            <Col>
                <Card className='border border-0'>
                    <Card.Img variant="top p-3 rounded" src={foodImage} />
                    <Card.Body>
                        <Card.Title>{foodName}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 110)}
                        </Card.Text>
                        <div className=" bg-light p-3 d-flex align-item-center justify-content-around">
                            <div>
                                <Rating
                                    initialRating={4}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly
                                />
                            </div>
                            <div>
                                <h4> Price : ${price}</h4>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllRecipe;