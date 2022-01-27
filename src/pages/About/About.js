import React, { lazy, Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import gif from '../../assets/about.svg';
import officers from '../../data/officers';
import chevronLogo from '../../assets/partner-logos/chevron.webp';
import cougarettesLogo from '../../assets/partner-logos/cougarettes.webp';
import csgirlsLogo from '../../assets/partner-logos/csgirls.webp';
import ripplematchLogo from '../../assets/partner-logos/ripplematch.svg';
import promazoLogo from '../../assets/partner-logos/promazo.webp';
import { MetaData } from '../../components/Meta/MetaData';

import './About.css';
import Loading from '../../components/Loading/Loading';
const Officer = lazy(() => import('../../components/Officers/Officer'));

const meta = {
	title: 'About',
	desc: 'Learn more about CougarCS',
	url: 'https://cougarcs.com/about',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const About = () => {
	return (
		<>
			<MetaData {...meta} />
			<Container fluid className='contained hero hero-about'>
				<Row>
					<Col md='6' className='order-md-2'>
						<img src={gif} alt='undraw svg' className='img-fluid'></img>
					</Col>
					<Col md='6' className='order-md-0'>
						<div className='about-us'>
							<h1>About Us</h1>
							<p className='lead-text'>
								CougarCS is the largest student run Computer Science
								organization at the University of Houston. At CougarCS, our
								mission is to smoothly transition our inexperienced members into
								young professionals by the end of their degree, and to provide
								support and assistance to members who struggle academically or
								who need career guidance.
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<Suspense fallback={<Loading />}>
				<Container fluid className='contained sub-section'>
					<h2 className='heading'>Meet the Officers</h2>
					<div className='officers-grid'>
						{officers.map(
							(officer) =>
								officer.show && <Officer officer={officer} key={officer.id} />
						)}
					</div>
				</Container>
			</Suspense>
			<Container fluid className='contained partners-wrapper sub-section'>
				<Row>
					<Col md='6'>
						<h2 className='heading'>Official Sponsors</h2>
						<div className='partner-logos'>
							<img
								src={chevronLogo}
								className='partner-logo'
								alt='Chevron Logo'
							/>
						</div>
					</Col>
					<Col md='6'>
						<h2 className='heading'>Partner Clubs</h2>
						<div className='partner-logos'>
							<a
								href='https://uhcougarettes.com/'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={cougarettesLogo}
									className='partner-logo'
									alt='Cougarettes Logo'
								/>
							</a>
							<a href='https://csgirls.org/' target='_blank' rel='noreferrer'>
								<img
									src={csgirlsLogo}
									className='partner-logo'
									alt='CSGirls Logo'
								/>
							</a>
						</div>
					</Col>
					<Col md='12'>
						<h2 className='heading'>Partner Companies</h2>
						<div className='partner-logos'>
							<img
								src={ripplematchLogo}
								className='partner-logo'
								alt='Ripple Match Logo'
							/>
							<img
								src={promazoLogo}
								className='partner-logo'
								alt='Promazo Logo'
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default About;
