/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import headerImage from '../../assets/webdev.svg';
import Loading from '../../components/Loading/Loading';
import { MetaData } from '../../components/Meta/MetaData';
import './WebDev.css';

const meta = {
	title: 'WebDev',
	desc: 'Learn more about CougarCS WebDev',
	url: 'https://cougarcs.com/WebDev',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

//const url = `${process.env.REACT_APP_API_URL}/api/tutors`;

/*const fetchTutors = async () => {
	const res = await axios.get(url);
	return res.data.tutors;
};*/

const WebDev = () => {
	/*const queryClient = useQueryClient();
	const { data, isFetching } = useQuery('tutors', fetchTutors, {
		initialData: () => queryClient.getQueryData('tutors'),
		staleTime: 300000,
	});*/

	/*const displayTutors = () => {
		return isFetching ? (
			<Loading />
		) : (
			data?.map((val, i) =>
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
	};*/

	return (
		<>
			<MetaData {...meta} />
			<Container fluid className='contained hero hero-WebDev'>
				<Row className='pb-5'>
					<Col md='6' className='order-md-2'>
						<img src={headerImage} alt='undraw svg' className='img-fluid'></img>
					</Col>
					<Col md='6' className='order-md-0'>
						<div className='about-us'>
							<h1>Web Development Committee at CougarCS</h1>
							<p className='lead-text'>
								Our dedicated team is responsible for maintaining the CougarCS{' '}
								website and Discord bot. If you're passionate about web
								development and eager to gain hands-on experience while building
								new connections, this is the perfect opportunity for you. We
								value a foundational understanding of HTML, CSS, and JavaScript,
								making this a welcoming space for learners. If you're interested
								in joining our team or have any website suggestions, feel free
								to reach out to us via email at{' '}
								<a href='mailto:info@cougarcs.com'>info@cougarcs.com</a>, or
								simply contact our tech leads or web master on Discord!
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<Container fluid className='contained sub-section'>
				<h2 className='heading'>Special Thanks to Our Web Developers</h2>
				<Loading />
				{/* <div className={isFetching ? 'fetching' : 'tutors-wrapper'}>
					{displayTutors()}
				</div> */}
			</Container>

			<Container fluid className='contained sub-section'>
				<h2 className='heading'>Interested in tutoring for CougarCS?</h2>
				<div className='webdev-cta text-center col-md-8 mx-auto'>
					<p>
						Develop Real-World Technical Skills - Work With a Team - Resume
						Building - Gain Mentorship - Earn CougarCS Member Points
					</p>
					<Button className='ghost-button' href='https://github.com/CougarCS'>
						Contribute Today
					</Button>
				</div>
			</Container>
		</>
	);
};

export default WebDev;
