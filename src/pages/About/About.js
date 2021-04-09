import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import gif from '../../assets/about.svg';
import Officer from '../../components/Officers/Officer';
import officers from '../../officers';
import './About.css';

// Partners
import chevronLogo from '../../assets/partner-logos/chevron.png';
import uhspeLogo from '../../assets/partner-logos/uhspe.png';
import ripplematchLogo from '../../assets/partner-logos/ripplematch.svg';
import promazoLogo from '../../assets/partner-logos/promazo.jpg';

class About extends React.Component {
	render() {
		return (
			<>
				<Helmet>
					<title>About</title>
				</Helmet>
				<Container fluid>
					<Row className='rowHeight'>
						<Col md='6' className='order-md-2'>
							<img src={gif} alt='undraw svg' className='img-fluid'></img>
						</Col>
						<Col md='6' className='order-md-0'>
							<div className='about-us'>
								<h1>About Us</h1>
								<p className='lead-text'>
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

				<Container fluid className='contained team-wrapper'>
					<h2 className='heading'>Meet the Officers</h2>
					<div className='officers-grid'>
						{officers.map((officer) =>
							officer.show ? (
								<Officer officer={officer} key={officer.id} />
							) : null
						)}
					</div>
				</Container>

				<Container fluid className='contained partners-wrapper'>
					<Row>
						<Col md='6'>
							<h2 className='heading'>Official Sponsors</h2>
							<div className="partner-logos">
								<img src={chevronLogo} className="partner-logo" />
							</div>
						</Col>
						<Col md='6'>
							<h2 className='heading'>Partner Clubs</h2>
							<div className="partner-logos">
								<img src={uhspeLogo} className="partner-logo" />
							</div>
						</Col>
						<Col md='12'>
							<h2 className='heading'>Partner Companies</h2>
							<div className="partner-logos">
								<img src={ripplematchLogo} className="partner-logo" />
								<img src={promazoLogo} className="partner-logo" />
							</div>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
export default About;
