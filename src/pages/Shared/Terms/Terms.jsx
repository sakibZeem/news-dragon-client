import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Our Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam ullam laudantium esse nobis. Amet, suscipit! Dolorum ea nihil animi.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;