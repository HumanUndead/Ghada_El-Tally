import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container className="py-5 mt-5">
            <h1 className="display-4 fw-bold">About Us</h1>
            <p className="lead text-muted">
                Welcome to Ghada El-Tally. We are dedicated to providing the best service.
            </p>
        </Container>
    );
};

export default AboutUs;