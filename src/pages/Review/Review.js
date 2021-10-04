import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayReview from '../../components/DisplayReview/DisplayReview';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('./reviewData.JSON')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <div className="my-4">
                <p className='info'>People About Our Class</p>
                <h2 className='heading'>Reviews</h2>
            </div>
            <Row xs={1} md={2} className="g-4">
                {reviews.map(review => <DisplayReview
                    key={review.id}
                    review={review}
                >
                </DisplayReview>)}
            </Row>
        </Container>
    );
};

export default Review;