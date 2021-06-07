import axios from 'axios';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import headerImage from '../../assets/tutoring.svg';
import discordIcon from '../../assets/icons/discord-icon.png';
import { MetaData } from '../../components/Meta/MetaData';
import { useQuery, useQueryClient } from 'react-query';
import './Tutoring.css';
import Loading from '../../components/Loading/Loading';

const meta = {
	title: 'Tutoring',
	desc: 'Learn more about CougarCS Tutoring',
	url: 'https://cougarcs.com/tutoring',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const url = 'https://backend.cougarcs.com/api/tutors';

const fetchTutors = async () => {
	const res = await axios.get(url);
	return res.data.tutors;
};

const Tutoring = () => {
	const queryClient = useQueryClient();
	const { data, isFetching } = useQuery('tutors', fetchTutors, {
		initialData: () => queryClient.getQueryData('tutors'),
		staleTime: 300000,
	});

	const displayTutors = () => {
		return isFetching ? (
			<Loading />
		) : (
			data.map((val, i) =>
				val?.linkedin ? (
					<div key={i}>
						<a
							href={val.linkedin}
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							{val.name}
						</a>
					</div>
				) : (
					<div key={i}>{val.name}</div>
				)
			)
		);
	};

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
				<div className={isFetching ? 'fetching' : 'tutors-wrapper'}>
					{displayTutors()}
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
