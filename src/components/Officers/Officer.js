import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Officer.css';

function Officer({ officer }) {
    return (
        <>
            <Row >
                <Col >
                    <div className="our-team">
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
                                        <i className="fa fa-envelope fa"></i>
                                    </a>
                                </li>
                            }
                            {
                                officer.linkedin.length > 0 &&
                                <li >
                                    <a href={officer.linkedin} target="_blank" rel="noopener nofollow">
                                        <i className="fa fa-linkedin fa"></i>
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


// <Card key={officer.id}>
//     <Card.Img variant='top' src={officer.image} />
//     <br></br>
//     <Card.Body>
//         <Card.Title id='officerName'>{officer.name}</Card.Title>
//         <h5 style={{ textAlign: 'center' }}>{officer.title}</h5>
//         <div id="officerInfo">
//             {
//                 officer.email.length > 0 &&
//                 <Nav.Link href={`mailto:${officer.email}`}>
//                     <i className="fa fa-envelope fa"></i>
//                 </Nav.Link>
//             }
//             {
//                 officer.linkedin.length > 0 &&
//                 <Nav.Link href={officer.linkedin}>
//                     <i className="fa fa-linkedin fa"></i>
//                 </Nav.Link>
//             }
//         </div>
//     </Card.Body>
// </Card>

export default Officer
