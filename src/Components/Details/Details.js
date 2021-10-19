import React from 'react';
import useService from '../../hooks/useService';
import { useParams } from 'react-router';
import { Col, Row } from "react-bootstrap";

const Details = () => {
    const [services] = useService();
    const { id } = useParams();
    const newSelected = services?.find((service) => service.key === Number(id));

    return (
        <div className="my-5">
            <Row>
                <Col>
                    <img width="25%" src={newSelected?.img} alt="" />
                </Col>
                <Col className="p-3">
                    <h1>{newSelected?.department}</h1>
                    <Col className="p-3">
                        <Row>
                            <Col>
                                <h1>Fees: {newSelected?.fees}$</h1>
                            </Col>
                            <Col>
                                <div className="text-center">
                                    <p>{newSelected?.description}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default Details;