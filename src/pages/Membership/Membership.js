import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import analyticsSVG from '../../assets/analytics.svg';
import collectingSVG from '../../assets/collecting.svg';
import gif from '../../assets/member.svg';
import memorySVG from '../../assets/memory.svg';
import teachingSVG from '../../assets/teaching.svg';
import './Membership.css';

class Membership extends Component {
	render() {
		return (
			<div>
				<Container fluid style={{ padding: '2em' }}>
					<Row>
						<Col md='6' className='order-md-2'>
							<img src={gif} alt='undraw svg' style={{ width: '100%' }}></img>
						</Col>
						<Col md='6' className='order-md-0'>
							<div className='membership'>
								<h1>Membership</h1>
								<p>
									CougarCS offers students exclusive access to a variety of
									events and resources aimed at career preparedness. Throughout
									every semester, we host dozens of technical workshops,
									information sessions, and programming challenges. Technical
									workshops and information sessions, often hosted by Fortune
									100 companies, cover a broad spectrum of topics such as resume
									critiques, career fair preparation, mock interviews and much
									more. Our programming challenges offer our members a chance to
									showcase their problem solving skills in a high energy
									environment, compete with their peers, and earn prizes. In
									addition to these events, we also provide weekly tutoring and
									academic support. CougarCS also has a far reaching network of
									alumni who are industry professionals and are always looking
									to connect with current members!
								</p>
								<p>
									Memberships are priced at{' '}
									<strong>$18.00 for a full year </strong> or{' '}
									<strong>$10.00 a semester</strong>. If you are interested in
									becoming a member there are a few ways you can let us know.
									Request to become a member on the get involved page and our
									Treasurer,{' '}
									{<a href='mailto:treasurer@cougarcs.com'>Chantha Mak</a>},
									will be in contact with you shortly. You can also
									{/* find an
									Officer on the 5th floor of PGH (Philip Guthrie Hoffman Hall)
									or */}{' '}
									email us at
									<a href='mailto:info@cougarcs.com'>info@cougarcs.com</a>.
								</p>
								<p>
									Whats that? You want to get more envolved with CougarCS?
									Interested in joining our Webdev team? Please reach out to
									Shubh Sheth at{' '}
									<a href='mailto:webmaster@cougarcs.com'>
										webmaster@cougarcs.com
									</a>
									. What about becoming a tutor? For that you can contact{' '}
									<a href='mailto:tutoring@cougarcs.com'>
										tutoring@cougarcs.com
									</a>
									.
								</p>
								<div>
									{/* <LinkContainer to='/register'>
										<ButtonToolbar>
											<Button className='learnMoreBtn' variant='primary'>
												Become a member
											</Button>
										</ButtonToolbar>
									</LinkContainer> */}
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<Container fluid style={{ textAlign: 'center' }}>
					<h3>What Are The Benefits</h3>
					<Row className='benefits' md={12} xs={12}>
						<div>
							<Row>
								<Col>
									<Card style={{ textAlign: 'center', border: 'none' }}>
										<Card.Body>
											<div>
												<img
													src={analyticsSVG}
													style={{ height: '10em', width: '9em', color: 'red' }}
													alt='undraw'
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
													alt='undraw'
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
													alt='undraw'
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
													alt='undraw'
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
			</div>
		);
	}
}
export default Membership;
