import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import gif from '../../assets/about.svg';
import linkedinLogo from '../../assets/linkedinLogo.png';
import officers from '../../officers';
import './About.css';

const About = () => (
  <div className='test'>
    <Container fluid>
      <Row>
        <Col md="6" className="order-md-2">
          <img src={gif} alt='undraw svg' className='img-fluid'></img>
        </Col>
        <Col md="6" className="order-md-0">
          <div className='about-us'>
            <h1>About Us</h1>
            <p>
              CougarCS is the largest student run Computer Science
              organization at the University of Houston. At CougarCS, our
              mission is to smoothly transition our inexperienced members
              into young professionals by the end of their degree, and to
              provide support and assistance to members who struggle
              academically or who need career guidance.
                </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container
      fluid
      className='officerCard'
      style={{ marginBottom: '3em' }}
    >
      <h1 style={{ marginTop: '1.8em' }}>Meet the Officers</h1>
      <Row>
        <div className='officerImages'>
          {officers.map((officer) => (
            <Card key={officer.id}>
              <Card.Img variant='top' src={officer.image} />
              <br></br>
              <Card.Body>
                <Card.Title id='officerName'>{officer.name}</Card.Title>
                <h5 style={{ textAlign: 'center' }}>{officer.title}</h5>
                {/* <p style={{ textAlign: 'center' }}>{officer.email}</p> */}
                <div id="officerInfo">
                  {
                    officer.email.length > 0 ?
                      <Nav.Link href={`mailto:${officer.email}`}>
                        <i className="fa fa-envelope fa-2x"></i>
                      </Nav.Link> : null
                  }
                  {
                    officer.linkedin.length > 0 ?
                      <Nav.Link href={officer.linkedin}>
                        <img id="linkedinLogo" src={linkedinLogo} alt='linkedinLogo'></img>
                      </Nav.Link> : null
                  }
                </div>


              </Card.Body>
            </Card>
          ))}
        </div>
      </Row>
    </Container>
  </div >
);
export default About;
