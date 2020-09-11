import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form, Col, Button } from 'react-bootstrap';
import SuccessModal from './../Modals/SuccessModal';
import ErrorModal from './../Modals/ErrorModal';
import axios from 'axios';

export const Payment = () => {

	// Stripe Init
	const stripe = useStripe();
	const elements = useElements();

	// Fields
	const [user, setUser] = useState({
		email: '',
		firstName: '',
		lastName: '',
		uhID: '',
		classification: '',
		paidUntil: '',
		phone: '',
	});
	const [loading, setLoading] = useState(false);
	const [buttonText, setButtonText] = useState('Submit');

	const [successModal, setSuccessModal] = useState(false);
	const [errorModal, setErrorModal] = useState(false);

	// Card Element Styles
	const cardOptions = {
		style: {
			base: {
				backgroundColor: '#fff',
				fontSize: '16px',
				color: '#495057',
				padding: '15px',
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

	const handleSubmit = async (e) => {
		e.preventDefault();


		// Disable form
		setButtonText('Loading...');
		setLoading(true);

		if (!stripe || !elements) {
			resetForm();
			setLoading(false);
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
				const response = await axios
					.post("https://cougarcs-backend.herokuapp.com/api/payment", {
						token: id,
						user
					})
					.then(() =>{
						// Reset Form
						resetForm();
						setLoading(false);
						setButtonText('Success!');
						setSuccessModal(true);
						return;
					})

			} catch (e) {
				resetForm();
				setLoading(false);
				setErrorModal(true);
				setButtonText('Submit');
			}
		} else {
			resetForm();
			setLoading(false);
			setErrorModal(true);
			setButtonText('Submit');
		}

	};

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const resetForm = () => {
		setUser({
			email: '',
			firstName: '',
			lastName: '',
			uhID: '',
			classification: '',
			paidUntil: '',
			phone: '',
		})

		elements.getElement(CardElement).clear();
	}

	return (
		<Form onSubmit={handleSubmit} className='child p-3'>
			<SuccessModal show={successModal} handleClose={() => setSuccessModal(false)}></SuccessModal>
			<ErrorModal show={errorModal} handleClose={() => setErrorModal(false)}></ErrorModal>
			<Form.Row>
				<Form.Group as={Col} controlId='formGridFirstName'>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='First Name'
						required
						onChange={(e) => handleChange(e)}
						name='firstName'
						value={user.firstName}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridLastName'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Last Name'
						required
						onChange={(e) => handleChange(e)}
						name='lastName'
						value={user.lastName}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='text'
						placeholder='Email'
						required
						onChange={(e) => handleChange(e)}
						name='email'
						value={user.email}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPhoneNumber'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='tel'
						pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
						placeholder='Phone'
						required
						onChange={(e) => handleChange(e)}
						name='phone'
						value={user.phone}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridClassification'>
					<Form.Label>Classification</Form.Label>
					<Form.Control
						as='select'
						name='classification'
						required
						onChange={(e) => handleChange(e)}
						value={user.classification}>
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
						placeholder='UHID'
						required
						onChange={(e) => handleChange(e)}
						name='uhID'
						value={user.uhID}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridClassification'>
					<Form.Label>Payment For</Form.Label>
					<Form.Control
						as='select'
						value={user.paidUntil}
						required
						onChange={(e) => handleChange(e)}
						name='paidUntil'>
						<option value=''>Choose...</option>
						<option value='semester'>Semester ($10)</option>
						<option value='year'>Year ($18)</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} className='stripe-container' controlId='stripPayment'>
					<CardElement options={cardOptions} />
				</Form.Group>
			</Form.Row>

			<Button
				disabled={loading}
				variant='primary'
				type='submit'
				size='lg'
				block
				className='mt-4 mb-4'>
				{buttonText}
			</Button>
		</Form>
	);
};
