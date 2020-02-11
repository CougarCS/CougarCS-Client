import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Officer.css';

const Officer = ({ officer }) => {
    return (
        <>
            <Row >
                <Col >
                    <div className="officers">
                        <div className="picture">
                            <Image src={officer.image} />
                        </div>
                        <div className="team-content">
                            <h5 className="name">{officer.name}</h5>
                            <h6 className="title">{officer.title}</h6>
                        </div>
                        <ul className="social">
                            {
                                officer.email.length > 0 &&
                                <li>
                                    <a href={`mailto:${officer.email}`}>
                                        <i className="far fa-envelope fa"></i>
                                    </a>
                                </li>
                            }
                            {
                                officer.linkedin.length > 0 &&
                                <li >
                                    <a href={officer.linkedin} target="_blank" rel="noopener nofollow">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            }

                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Officer
