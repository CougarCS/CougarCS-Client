import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form, Col, Button, Image, Modal } from 'react-bootstrap';
import { load } from 'recaptcha-v3';
import CustomModal from '../Modals/CustomModal';
import axios from 'axios';
import check from '../../assets/check.png';
import warn from '../../assets/warn.png';
import { useForm } from 'react-hook-form';

export const Payment = () => {
	const stripe = useStripe();
	const elements = useElements();

	const [buttonText, setButtonText] = useState('Submit');

	const {
		register,
		formState: { isSubmitting },
		handleSubmit,
		reset,
	} = useForm();

	const [successModal, setSuccessModal] = useState(false);
	const [errorModal, setErrorModal] = useState(false);

	const cardOptions = {
		style: {
			base: {
				backgroundColor: '#fff',
				fontSize: '16px',
				color: '#495057',
				lineHeight: '36px',
				'::placeholder': {
					color: '#aab7c4',
				},
			},
			invalid: {
				color: '#495057',
			},
		},
	};

	const resetForm = () => {
		reset({
			email: '',
			firstName: '',
			lastName: '',
			uhID: '',
			classification: '',
			paidUntil: '',
			phone: '',
		});

		elements.getElement(CardElement).clear();
	};

	const onSubmit = async (user) => {
		setButtonText('Loading...');
		const recaptcha = await load(process.env.REACT_APP_RECAPTCHA_SITE_KEY, {
			autoHideBadge: true,
		});
		const recaptchaToken = await recaptcha.execute('paymentpage');

		if (!stripe || !elements) {
			resetForm();
			setButtonText('Submit');
			setErrorModal(true);
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});

		if (!error) {
			const { id } = paymentMethod;

			try {
				await axios
					.post('https://backend.cougarcs.com/api/payment', {
						token: id,
						user,
						recaptchaToken,
					})
					.then(() => {
						resetForm();
						setButtonText('Success!');
						setSuccessModal(true);
					});
			} catch (e) {
				console.log(e);
				resetForm();
				setErrorModal(true);
				setButtonText('Submit');
			}
		} else {
			resetForm();
			setErrorModal(true);
			setButtonText('Submit');
		}
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} className='child p-3'>
			<CustomModal
				show={successModal}
				handleClose={() => setSuccessModal(false)}
			>
				<Image className='warning-image' src={check} />
				<Modal.Title>Success!</Modal.Title>
				<p>
					We received your payment. Please check your email for confirmation.
				</p>
			</CustomModal>
			<CustomModal show={errorModal} handleClose={() => setErrorModal(false)}>
				<Image className='warning-image' src={warn} />
				<Modal.Title>Error!</Modal.Title>
				<p>
					Something went wrong. Please try again or contact{' '}
					<a href='mailto:treasurer@cougarcs.com'>treasurer@cougarcs.com</a> to
					pay with an alternative method.
				</p>
			</CustomModal>
			<Form.Row>
				<Form.Group as={Col} controlId='formGridFirstName'>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='First Name'
						{...register('firstName', { required: true, maxLength: 20 })}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridLastName'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Last Name'
						{...register('lastName', { required: true, maxLength: 20 })}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						placeholder='Email'
						{...register('email', { required: true })}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPhoneNumber'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='tel'
						pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
						placeholder='Phone'
						{...register('phone', {
							required: true,
							minLength: 6,
							maxLength: 12,
						})}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridClassification'>
					<Form.Label>Classification</Form.Label>
					<Form.Control
						as='select'
						{...register('classification', { required: true })}
					>
						<option value=''>Choose...</option>
						<option value='Freshman'>Freshman</option>
						<option value='Sophomore'>Sophomore</option>
						<option value='Junior'>Junior</option>
						<option value='Senior'>Senior</option>
						<option value='Post-Bacc'>Post-Bacc</option>
						<option value='Graduate PhD'>Graduate PhD</option>
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridUhID'>
					<Form.Label>UHID</Form.Label>
					<Form.Control
						type='text'
						pattern='^[0-9]{7,7}$'
						{...register('uhID', { required: true })}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridClassification'>
					<Form.Label>Payment For</Form.Label>
					<Form.Control
						as='select'
						{...register('paidUntil', { required: true })}
					>
						<option value=''>Choose...</option>
						<option value='semester'>Semester ($25)</option>
						<option value='year'>Year ($40)</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group
					as={Col}
					className='stripe-container'
					controlId='stripPayment'
				>
					<CardElement options={cardOptions} />
				</Form.Group>
			</Form.Row>

			<Button
				disabled={isSubmitting}
				variant='primary'
				type='submit'
				size='lg'
				block
				className='mt-4 mb-4'
			>
				{buttonText}
			</Button>
		</Form>
	);
};
