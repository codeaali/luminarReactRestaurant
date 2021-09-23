import React, { useState, useEffect } from 'react'
import { Col, Row, Image, Card, ListGroup } from 'react-bootstrap';
import Rating from './Rating'

function RestaurantDetails({ match }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then(res => res.json())
                .then(data => {
                    setData(data.restaurants)
                })
        }
        fetchData();

    }, [])
    const details = data.find((i) => i.id == match.params.id)
    //console.log("data",data);
    return (
        <>
            {details ? (
                <Row className="my-3">
                    <Col md={3}>
                        <Image className="img" src={details.photograph} alt={details.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h2>{details.name}</h2>
                            <p>{details.neighborhood}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2><strong>Cuisine: </strong>{details.cuisine_type}</h2>
                            
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2><strong>Address: </strong>{details.address}</h2>
                            
                        </ListGroup.Item>
                    
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h4>Operating Hours:</h4>
                            <p>Monday: {details.operating_hours.Monday}</p>
                            <p>Tuesday: {details.operating_hours.Tuesday}</p>
                            <p>Wednesday: {details.operating_hours.Wednesday}</p>
                            <p>Thursday: {details.operating_hours.thursday}</p>
                            <p>Friday: {details.operating_hours.Friday}</p>
                            <p>Thursday: {details.operating_hours.Saturday}</p>
                            <p>Friday: {details.operating_hours.Sunday}</p>
                        </ListGroup.Item>
                    </Col>
                    <Row>
                    <Rating data={details.reviews}/>
                    </Row>
                </Row>
            ) : "error"}
        </>
    )
}

export default RestaurantDetails
