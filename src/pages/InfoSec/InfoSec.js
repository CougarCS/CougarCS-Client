import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import webgif from '../../assets/CougarCS_Banner.png';
import { MetaData } from '../../components/Meta/MetaData';
import discordIcon from '../../assets/icons/discord-icon.webp';
import './InfoSec.css';

const meta = {
	title: 'Info-Sec',
	desc: 'Learn more about CougarCS InfoSec',
	url: 'https://cougarcs.com/infosec',
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
								Have you ever wanted to learn how to hack into computers or
								phish someone through email ? Perhaps you’d like to learn about
								best information security practices to protect yourself and
								others? Or maybe you are down for competitive hacking in a
								controlled environment against external clubs!
							</p>
							<div className='hero-ctas'>
								<div className='discord-button-wrapper'>
									<Button
										className='discord-button'
										href='https://discord.gg/wdxqgErhKF'
										target='_blank'
										rel='nofollow noopener'
									>
										<img src={discordIcon} alt='discord button logo' />
										Join Discord
									</Button>
									<p>
										<small>More Information is provided via Discord</small>
									</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Container fluid className='contained sub-section'>
				<h2 className='heading'>Interested in InfoSec at CougarCS?</h2>
				<div className='info-cta text-center col-md-8 mx-auto'>
					<p>
						Develop Soft &amp; Technical Skills - Learn Linux - Protect yourself
						on the Internet - Partticapte in Security Challenenges - Earn
						CougarCS Member Points
					</p>
					<Button
						className='ghost-button'
						href='mailto:tutoring@cougarcs.com?subject=CougarCS Tutor Application'
					>
						Become a Hacker
					</Button>
				</div>
			</Container>
		</>
	);
};

export default InfoSec;
