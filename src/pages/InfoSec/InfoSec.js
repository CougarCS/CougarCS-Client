import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import webgif from '../../assets/CougarCS_Banner.png';
import { MetaData } from '../../components/Meta/MetaData';
import './InfoSec.css';

const meta = {
	title: 'Info-Sec',
	desc: 'Learn more about CougarCS Web-Dev',
	url: 'https://cougarcs.com/web-dev',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};
const InfoSec = () => {
	return (
		<>
			<MetaData {...meta} />
			<Container fluid className='contained hero hero-web'>
				<Row className='pb-5'>
					<Col md='6' className='order-md-2'>
						<img
							src={webgif}
							alt='banner svg'
							className='img-fluid'
							style={{ borderRadius: '10px' }}
						></img>
					</Col>
					<Col md='6' className='order-md-0'>
						<div className='about-us'>
							<h1>InfoSec at CougarCS</h1>
							<p className='lead-text'>
								Information Security something maybe put team members below not
								to sure what the vision is here
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default InfoSec;
