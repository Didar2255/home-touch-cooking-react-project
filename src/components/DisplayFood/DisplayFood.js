import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const DisplayFood = (props) => {
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
                        <Button variant='btn btn-primary text-white'>Purchase</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DisplayFood;