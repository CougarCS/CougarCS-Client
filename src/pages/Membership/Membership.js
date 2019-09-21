import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import analyticsSVG from '../../assets/analytics.svg';
import collectingSVG from '../../assets/collecting.svg';
import memorySVG from '../../assets/memory.svg';
import teachingSVG from '../../assets/teaching.svg';
import "./Membership.css";
class Membership extends React.Component {
   render() {
   return (
      <div>
         <Container fluid style={{ padding: '2em' }}>
            <div className="membership">
               <h1 className="header">Membership</h1>
               
               <p>
                  CougarCS offers students exclusive access to a variety of
                  events and resources aimed at career preparedness.
                  Throughout every semester, we host dozens of technical
                  workshops, information sessions, and programming challenges.
                  Technical workshops and information sessions, often hosted
                  by Fortune 100 companies, cover a broad spectrum of topics
                  such as resume critiques, career fair preparation, mock
                  interviews and much more. Our programming challenges offer
                  our members a chance to showcase their problem solving
                  skills in a high energy environment, compete with their
                  peers, and earn prizes. In addition to these events, we also
                  provide weekly tutoring and academic support. CougarCS also
                  has a far reaching network of alumni who are industry
                  professionals and are always looking to connect with current
                  members!
               </p>
               
               <p>
                  Memberships are priced at{' '}
                  <strong>$50.00 for a full year </strong> or{' '}
                  <strong>$30.00 a semester</strong>. If you are interested in
                  becoming a member there are a few ways you can let us know.
                  Request to become a member on the get involved page and our
                  Treasurer, Conrad Parker, will be incontact with you
                  shortly. You can also find an Officer on the 5th floor of
                  PGH (Philip Guthrie Hoffman Hall) or email{' '}
                  <a href="mailto:Info@CougarCS.com">Info@CougarCS.com</a>.
               </p>
            </div>
         <Row>
            <div>
            <p></p>
            </div>
         </Row>
         </Container>

         <Container fluid style={{ textAlign: 'center' }}>
            <h3>What Are The Benefits</h3>
            <Row style={{ padding: '3em' }} md={12} xs={12}>
            <div className="benefits">
               <Row>
                  <Col>
                  <Card style={{ textAlign: 'center', border: 'none' }}>
                     <Card.Body>
                        <div>
                        <img
                           src={analyticsSVG}
                           style={{ height: '10em', width: '9em', color: 'red' }}
                           alt="undraw"
                        />
                        </div>
                        <Card.Title style={{ textAlign: 'center' }}>
                        Technical workshops
                        </Card.Title>
                        <p style={{ textAlign: 'center' }}>
                           Learn industry standards and refine your skills in teams{' '}
                        </p>
                     </Card.Body>
                     </Card>
                  </Col>
                  <Col>
                     <Card style={{ textAlign: 'center', border: 'none' }}>
                     <Card.Body>
                        <div>
                           <img
                           src={collectingSVG}
                           alt="undraw"
                           style={{ height: '10em', width: '9em', color: 'red' }}
                           />
                        </div>
                        <Card.Title>Information Sessions</Card.Title>
                        <p>
                           Connect with companies from all over the world hiring at
                           UH
                        </p>
                     </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Card style={{ textAlign: 'center', border: 'none' }}>
                     <Card.Body>
                        <div>
                           <img
                           src={memorySVG}
                           alt="undraw"
                           style={{ height: '10em', width: '9em', color: 'red' }}
                           />
                        </div>
                        <Card.Title>Career Fair Preparation</Card.Title>
                        <p>Practice with mock interviews and resume building</p>
                     </Card.Body>
                     </Card>
                  </Col>
                  <Col>
                     <Card style={{ textAlign: 'center', border: 'none' }}>
                     <Card.Body>
                        <div>
                           <img
                           src={teachingSVG}
                           alt="undraw"
                           style={{ height: '10em', width: '9em', color: 'red' }}
                           />
                        </div>
                        <Card.Title style={{ textAlign: 'center' }}>
                           Tutoring and Academic Support
                        </Card.Title>
                        <p style={{ textAlign: 'center' }}>
                           Work through problems with intelligent and approachable
                           tutors who are focused on member success lmk what you
                           think
                        </p>
                     </Card.Body>
                     </Card>
                  </Col>
               </Row>
               </div>
            </Row>
         </Container>

         <Container className="opportunities">
            <h3>Some Opportunities</h3>
            <Container className="webDevTeam">
               <Row>
                  <Col>
                     
                  </Col>
                  <Col>
                     <p>
                        Whats that? You want to get more involved with CougarCS?
                        Interested in joining our webdev team? Please reach out to
                        Vyas Ramankulangara at{' '}
                        <a href="mailto:Vyas.R@CougarCS.com">Vyas.R@CougarCS.com</a>.
                     </p>
                  </Col>
               </Row>
            </Container>

            <Container className="hackathon">
               <Row>
                  <Col>
                     <p>
                        And for helping out at a hackathon or capture the flag
                        event? Lets get you in contact with our Director of
                        Hackathons, Athmar Ouda at{' '}
                        <a href="mailto:Athmar.Ouda@CougarCS.com">Athmar.Ouda@CougarCS.com</a>. 
                     </p>
                  </Col>
                  <Col>

                  </Col>
               </Row>
            </Container>

            <Container className="tutoring">
               <Row>
                  <Col>

                  </Col>
                  <Col>
                     <p>
                        What about becoming a tutor? If you are strong in any subject or you
                        have a passion for teaching, you can contact{' '}
                        <a href="mailto:Tutoring@CougarCS.com">Tutoring@cougarcs.com</a>.
                     </p>
                  </Col>
               </Row>
            </Container>
         </Container>
         </div>
      );
   }
}
export default Membership;
