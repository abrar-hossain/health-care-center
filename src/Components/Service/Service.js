import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { key, img, department, fees } = props.service;
    return (
        <Col className="my-3" md={4}>
            <Card style={{ minHeight: "480px" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{department}</Card.Title>
                    <p>
                        {" "}
                        <b>Fees: {fees}$</b>
                    </p>
                    <div>
                        <NavLink to={`/services/${key}`} className="w-50 btn btn-primary">
                            View Details
                        </NavLink>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;