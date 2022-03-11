import React, { useState } from 'react';
import { Form, Col, Button, Image, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './SignupForNews.css';
import CustomModal from '../Modals/CustomModal';
import check from '../../assets/check.png';
import warn from '../../assets/warn.png';

const SignupForNews = () => {
	const [buttonText, setButtonText] = useState('Sign Up');
	const { register, handleSubmit } = useForm();

	const [successModal, setSuccessModal] = useState(false);
	const [errorModal, setErrorModal] = useState(false);

	const onSubmit = async (data) => {
		setButtonText('Loading...');
		console.log(data);
	};

	return (
		<Form className='form' onSubmit={handleSubmit(onSubmit)}>
			<CustomModal
				show={successModal}
				handleClose={() => setSuccessModal(false)}
			>
				<Image className='warning-image' src={check} />
				<Modal.Title>Success!</Modal.Title>
				<p>Sign Up Successful.</p>
			</CustomModal>
			<CustomModal show={errorModal} handleClose={() => setErrorModal(false)}>
				<Image className='warning-image' src={warn} />
				<Modal.Title>Error!</Modal.Title>
				<p>Something went wrong. Please try again.</p>
			</CustomModal>

			<div>
				<p className='hide'> .. </p>
				<h1 className='signuptexth1'>Sign up for CougarSC Newsletter</h1>
				<p className='signuptextp'>You do not want miss out! </p>
			</div>
			<Form.Row className='row'>
				<Form.Group as={Col} controlId='formGridFirstName'>
					<Form.Control
						type='text'
						placeholder='First Name'
						className='textField'
						{...register('firstName', { required: true, maxLength: 20 })}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridLastName'>
					<Form.Control
						type='text'
						placeholder='Last Name'
						className='textField'
						{...register('lastName', { required: true, maxLength: 20 })}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Control
						type='email'
						placeholder='Email'
						className='textField'
						{...register('email', { required: true })}
					/>
				</Form.Group>
			</Form.Row>
			<Button
				// disabled={isSubmitting}
				variant='primary'
				type='submit'
				className='signup'
				variant='danger'
			>
				{buttonText}
			</Button>
			<p className='hide'> .. </p>
		</Form>
	);
};

export default SignupForNews;
