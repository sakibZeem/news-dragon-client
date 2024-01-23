import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import pic1 from "../../../assets/1.png";
import pic2 from "../../../assets/2.png";
import pic3 from "../../../assets/3.png";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 mt-3'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black fw-medium'> {category.name} </Link>
                    </p>)
                }
            </div>
            <Row xs={1} md={1} lg={1} className="g-4 mt-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic1} />
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
                        <Card.Img variant="top" src={pic2} />
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
                        <Card.Img variant="top" src={pic3} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        </Card.Body>
                        <Card.Footer className='d-flex align-items-center'>
                            <p className='mb-0 me-2'>Sports</p>
                            <IoCalendarClearOutline />
                            <small className="ms-2 "> Jan 19, 2024</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;