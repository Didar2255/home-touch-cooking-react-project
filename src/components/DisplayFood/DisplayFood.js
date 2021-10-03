import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DisplayFood = (props) => {
    console.log(props.food)
    const { foodImage, foodName, Price } = props.food
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={foodImage} />
                    <Card.Body>
                        <Card.Title>{foodName}</Card.Title>
                        <Card.Text>
                            <h3>Course price : $ {Price}</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DisplayFood;