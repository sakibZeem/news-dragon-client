import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoBookmarkOutline, IoEye, IoShareSocialOutline, IoStar, IoStarOutline } from "react-icons/io5";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                    <div className='ms-2 flex-grow-1'>
                        <p className='mb-0'> {author.name} </p>
                        <p className='mb-0'><small> {moment(author?.published_date).format('yyyy-MM-D')} </small></p>
                    </div>
                    <div>
                        <IoBookmarkOutline className='me-2' />
                        <IoShareSocialOutline />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</>
                            : <>{details.slice(0, 250)}... <Link className='text-decoration-none text-danger' to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1'>
                        <div className='d-flex align-items-center'>
                            <Rating placeholderRating={rating.number}
                                emptySymbol={<IoStarOutline />}
                                placeholderSymbol={<IoStar className='text-warning' />}
                                fullSymbol={<IoStar />} readonly>
                            </Rating>
                            <p className='mb-0 ms-2'> {rating?.number}</p>
                        </div>
                    </div>
                    <div>
                        <IoEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsCard;