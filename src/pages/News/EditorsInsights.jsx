import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import insight1 from '../../assets/editorsInsight1.png';
import insight2 from '../../assets/editorsInsight2.png';
import insight3 from '../../assets/editorsInsight3.png';
import { IoCalendarClearOutline } from 'react-icons/io5';

const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={insight1} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center'>
                        <IoCalendarClearOutline />
                        <small className="ms-2 "> Jan 19, 2024</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={insight2} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center'>
                        <IoCalendarClearOutline />
                        <small className="ms-2 "> Jan 19, 2024</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={insight3} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center'>
                        <IoCalendarClearOutline />
                        <small className="ms-2 "> Jan 19, 2024</small>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsights;