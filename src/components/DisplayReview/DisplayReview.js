import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './DisplayReview.css'

const DisplayReview = (props) => {
    const { recipeName, foodImage, rating } = props.review
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={foodImage} />
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                    />
                    <Card.Text>
                        <h4>Rating : {rating}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayReview;