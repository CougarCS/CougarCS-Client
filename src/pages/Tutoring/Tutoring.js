import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Tutoring.css';

import headerImage from '../../assets/tutoring.svg';
import discordIcon from '../../assets/icons/discord-icon.png';
import { MetaData } from '../../components/Meta/MetaData';

const meta = {
	title: 'Tutoring',
	desc: 'Learn more about CougarCS Tutoring',
	url: 'https://cougarcs.com/tutoring',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const Tutoring = () => {
	return (
		<>
			<MetaData {...meta} />
			<Container fluid className='contained hero hero-tutoring'>
				<Row>
					<Col md='6' className='order-md-2'>
						<img src={headerImage} alt='undraw svg' className='img-fluid'></img>
					</Col>
					<Col md='6' className='order-md-0'>
						<div className='about-us'>
							<h1>Tutoring at CougarCS</h1>
							<p className='lead-text'>
								CougarCS offers weekly tutoring time slots for many of our
								degree’s toughest classes. If you need help in your coursework,
								please do not hesitate to reach out to our tutoring team! Email
								tutoring@cougarcs.com with your course code (COSC XXXX) in the
								subject line and our tutors will contact you withing 24-48
								hours.
							</p>
							<div className='hero-ctas'>
								<div className='discord-button-wrapper'>
									<Button
										className='discord-button'
										href='https://discord.gg/rEuFP8ZgN9'
										target='_blank'
										rel='nofollow noopener'
									>
										<img src={discordIcon} alt='discord button logo' />
										Join Discord
									</Button>
									<p>
										<small>Tutoring is provided via Discord</small>
									</p>
								</div>
								<Button
									className='ghost-button'
									href='mailto:tutoring@cougarcs.com?subject=CougarCS Tutor Application'
								>
									Become a Tutor
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>

			<Container fluid className='contained sub-section'>
				<h2 className='heading'>Tutoring Available For</h2>
				<div className='classes-wrapper'>
					<div className='class-number'>COSC 1306</div>
					<div className='class-number'>COSC 1430</div>
					<div className='class-number'>COSC 2430</div>
					<div className='class-number'>COSC 3320</div>
					<div className='class-number'>COSC 3360</div>
					<div className='class-number'>COSC 3380</div>
				</div>
			</Container>

			<Container fluid className='contained sub-section'>
				<h2 className='heading'>Tutoring Possible Because of</h2>
				<div className='tutors-wrapper'>
					<div>
						<a
							href='https://www.linkedin.com/in/aiqbal-cs/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Adil Iqbal
						</a>
					</div>
					<div>Abdullah S.</div>
					<div>Ahmed Qureshi</div>
					<div>Antonio U.</div>
					<div>Arno Dunstatter</div>
					<div>
						<a
							href='https://www.linkedin.com/in/aryanparajulee/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Aryan P.
						</a>
					</div>
					<div>Ash K.</div>
					<div>Elena T.</div>
					<div>Ibrahim K.</div>
					<div>Jacob H.</div>
					<div>Jose L.</div>
					<div>Kevin Flores</div>
					<div>Liam A.</div>
					<div>
						<a
							href='https://www.linkedin.com/in/loveleen-thomas/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Loveleen T.
						</a>
					</div>
					<div>Mariana V.</div>
					<div>Matt P.</div>
					<div>Mayssam K.</div>
					<div>Micaela S.</div>
					<div>Minh P.</div>
					<div>Muhammad U.</div>
					<div>
						<a
							href='https://www.linkedin.com/in/nhat-thien-bui-480b9b14a/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Nhat B.
						</a>
					</div>
					<div>
						<a
							href='https://www.linkedin.com/in/Nicdb99/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Nicholas B.
						</a>
					</div>
					<div>Nickolaus H.</div>
					<div>Ojas G.</div>
					<div>Osinor I.</div>
					<div>
						<a
							href='https://www.linkedin.com/in/samir-shahid-05749a161/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Samir S.
						</a>
					</div>
					<div>Seth L.</div>
					<div>
						<a
							href='https://www.linkedin.com/in/shaheer-khan-1000061a4/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Shaheer K.
						</a>
					</div>
					<div>
						<a
							href='https://www.linkedin.com/mwlite/in/shannon-lombardo-580190168/'
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							Shannon L.
						</a>
					</div>
					<div>Susan A.</div>
					<div>Tri N.</div>
					<div>Trixie N.</div>
				</div>
				<div className='tutor-cta text-center'>
					<p>Are you interested in tutoring for CougarCS?</p>
					<Button
						className='ghost-button'
						href='mailto:tutoring@cougarcs.com?subject=CougarCS Tutor Application'
					>
						Become a Tutor
					</Button>
				</div>
			</Container>

			<Container fluid className='contained partners-wrapper'>
				<Row></Row>
			</Container>
		</>
	);
};

export default Tutoring;
