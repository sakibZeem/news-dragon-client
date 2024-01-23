import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from './EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;

    return (
        <>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <IoArrowBackOutline /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </>
    );
};

export default News;