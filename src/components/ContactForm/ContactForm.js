import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import CustomModal from '../Modals/CustomModal';
import check from '../../assets/check.png';
import warn from '../../assets/warn.png';
import './ContactForm.css';
import { Socials } from '../Socials/Socials';

const ContactForm = () => {

	const [successModal, setSuccessModal] = useState(false);
	const [errorModal, setErrorModal] = useState(false);
	const { register, formState: { isSubmitting }, handleSubmit, reset } = useForm();

	const formReset = () => {
		reset({
			firstName: "",
			lastName: "",
			email: "",
			body: ""
		});
	};

	const onError = (data) => {
		setErrorModal(true);
		formReset();
	};

	const onSubmit = async (data) => {
		await axios
			.post('https://backend.cougarcs.com/api/send', data);
		setSuccessModal(true);
		formReset();
	};

	const socialLinks = [
		{ href: 'https://www.facebook.com/cougarcs/', html: <i className='fab fa-facebook'></i> },
		{ href: 'https://www.instagram.com/uhcougarcs/?hl=en', html: <i className='fab fa-instagram'></i> },
		{ href: 'https://twitter.com/uhcougarcs', html: <i className='fab fa-twitter'></i> },
		{ href: 'https://www.linkedin.com/in/cougarcs/', html: <i className='fab fa-linkedin'></i> },
		{ href: 'https://discordapp.com/invite/aKUzPFY', html: <i className='fab fa-discord'></i> },
	];

	return (
		<Container className='contactForm'>
			<CustomModal
				show={successModal}
				handleClose={() => setSuccessModal(false)}>
				<Image className="warning-image" src={check} />
				<Modal.Title>Success!</Modal.Title>
				<p>
					Message has been sent!
				</p>
			</CustomModal>
			<CustomModal
				show={errorModal}
				handleClose={() => setErrorModal(false)}>
				<Image className='warning-image' src={warn} />
				<Modal.Title>Error!</Modal.Title>
				<p>
					Unable to send message!
				</p>
			</CustomModal>
			<h1 id='getInTouch'>Get In Touch</h1>
			<Row>
				<Col xs={12} md={6} lg={6}>
					<Form onSubmit={handleSubmit(onSubmit, onError)}>
						<Form.Group>
							<Form.Label htmlFor='firstName'>First Name*</Form.Label>
							<Form.Control
								type='text'
								{...register("firstName", { required: true, maxLength: 20 })}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='lastName'>Last Name*</Form.Label>
							<Form.Control
								type='text'
								{...register("lastName", { required: true, maxLength: 20 })}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='email'>Email Address*</Form.Label>
							<Form.Control
								type='email'
								{...register("email", { required: true })}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='body'>Enter your Message:*</Form.Label>
							<Form.Control
								name='body'
								as='textarea'
								{...register("body", { required: true })}
								rows='4'
							/>
						</Form.Group>
						<Button
							className='contactButton'
							variant='primary'
							type='submit'
							disabled={isSubmitting}>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</Button>
					</Form>
				</Col>
				<Col className='contact-info'>
					<div className='follow'>
						<i className='fas fa-map-marker'></i>
						<span>
							<a href='https://goo.gl/maps/pC4D4XR5Ejr1ebmW9'>
								<h5>Philip Guthrie Hoffman Hall (PGH), Room 541</h5>
							</a>
							<div className='map'>
								<iframe
									title='CougarCS Office'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.1469037177662!2d-95.34468975917542!3d29.721679075847103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be5699bd0899%3A0xca1113d89a350732!2sPhilip%20Guthrie%20Hoffman%20Hall%20(PGH)!5e0!3m2!1sen!2sus!4v1576703793192!5m2!1sen!2sus'
									style={{
										width: '100%',
										height: '100%',
										frameBorder: '0',
										border: 0,
										allowFullscreen: '',
										paddingTop: '15px',
									}}></iframe>
							</div>
						</span>
					</div>
					<div className='follow'>
						<i className='fas fa-envelope'></i>
						<span>
							<h6>
								<a href='mailto:info@cougarcs.com'>info@cougarcs.com</a>
							</h6>
						</span>
					</div>
					<div className='follow socials'>
						{
							socialLinks.map(socialLink =>
								<Socials key={socialLink.href} href={socialLink.href}>
									{socialLink.html}
								</Socials>
							)
						}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactForm;
