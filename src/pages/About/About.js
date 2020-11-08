import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import gif from '../../assets/about.svg';
import Officer from '../../components/Officers/Officer';
import officers from '../../officers';
import './About.css';
class About extends React.Component {
	render() {
		return (
			<div className='test'>
				<Container fluid>
					<Row className='rowHeight'>
						<Col md='6' className='order-md-2'>
							<img src={gif} alt='undraw svg' className='img-fluid'></img>
						</Col>
						<Col md='6' className='order-md-0'>
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

				<Container className='officerCard' fluid>
					<h1 style={{ marginTop: '1.8em' }}>Meet the Officers</h1>
					<Row className='cnt'>
						<div className='officerImages'>
							{officers.map((officer) =>
								officer.show ? (
									<Officer officer={officer} key={officer.id} />
								) : null
							)}
						</div>
					</Row>
				</Container>
			</div>
		);
	}
}
export default About;
