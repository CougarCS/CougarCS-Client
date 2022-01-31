import React, { useEffect } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Typed from 'typed.js';
import { MetaData } from '../../components/Meta/MetaData';
import './Home.css';

const animateText = () =>
	new Typed('#typed', {
		strings: [
			"ARE <span style='color:white;text-shadow: 6px 6px 0px #000,-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;'>COUGARCS</span>",
			"COMPUTE <br>STUDENT <span style='color:#FFD700'>SUCCESS</span>",
		],
		typeSpeed: 70,
		backSpeed: 75,
		loop: true,
	});

const Home = () => {
	useEffect(() => {
		animateText();
	}, []);

	const meta = {
		title: 'Home',
		desc: 'CougarCS is the largest student run Computer Science organization at the University of Houston.',
		url: 'https://cougarcs.com/',
		img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
	};

	return (
		<>
			<MetaData {...meta} />
			<div style={{ overflow: 'hidden' }}>
				{/* <div
				className='alert alert-warning'
				role='alert'
				style={{ textAlign: 'center' }}>
				WE ARE LOOKING FOR OFFICERS!{' '}
				<a
					href='https://forms.gle/wFiokVCgfc8Wqp1S7'
					className='alert-link'
					target='_blank'
					rel='noopener nofollow'>
					CLICK HERE TO APPLY
				</a>
			</div> */}

				<div className='ani'>
					<div className='bgDark'>
						<div className='main-text'>
							<p className='firstP'>
								WE <span id='typed' />
							</p>
							<div className='buttonsWidth'>
								<div className='d-flex justify-content-evenly'>
									<div>
										<LinkContainer to='/about'>
											<ButtonToolbar>
												<Button size='lg' variant='success'>
													Learn More
												</Button>
											</ButtonToolbar>
										</LinkContainer>
									</div>
									<div>
										<LinkContainer to='/register'>
											<ButtonToolbar>
												<Button size='lg' variant='primary'>
													Register
												</Button>
											</ButtonToolbar>
										</LinkContainer>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
