import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import gif from '../../assets/about.svg';
import officers from '../../officers';
import './About.css';

class About extends React.Component {
  render() {
    return (
    <div className='test'>
        <div className="about-us-container">
          {/* networking svg image */}
          <img src={gif} alt='undraw svg' id="aboutImg"></img>
          {/* about us paragraph with call to action button */}
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
              <button className="btn getInvolvedBtn">Get Involved</button>
          </div>
        </div>
        {/* list of officers */}
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
                    <h5 id="officerTitle" style={{ textAlign: 'center' }}>{officer.title}</h5>
                    <p id="officerEmail" style={{ textAlign: 'center' }}>{officer.email}</p>
                    </Card.Body>
                </Card>
              ))}
              </div>
          </Row>
        </Container>

        

    </div>
    );
  }
}
export default About;
