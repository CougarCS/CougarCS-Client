import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';
export const Payment = () => {

	// console.log(process.env);

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

	// Card Element Styles
	const cardOptions = {
		style: {
			base: {
				backgroundColor: '#fff',
				fontSize: '16px',
				color: '#495057',
				padding: '15px',
				lineHeight: '52px',
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

		// disable form
		e.currentTarget.querySelector("button").disabled = true;

		// return;

		if (!stripe || !elements) {
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
					});

				console.log(response);

			} catch (e) {
				console.error(e);
			}


		} else {
			console.error('ERROR!');
			console.error(error.message);
		}
	};

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<Form onSubmit={handleSubmit} className='child p-3'>
			<Form.Row>
				<Form.Group as={Col} controlId='formGridFirstName'>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='First Name'
						required
						onChange={(e) => handleChange(e)}
						name='firstName'
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
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridPhoneNumber'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='tel'
						pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
						placeholder='xxx-xxx-xxxx'
						required
						onChange={(e) => handleChange(e)}
						name='phone'
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridClassification'>
					<Form.Label>Classification</Form.Label>
					<Form.Control
						as='select'
						defaultValue='Choose...'
						required
						onChange={(e) => handleChange(e)}
						name='classification'>
						<option>Choose...</option>
						<option>Freshman</option>
						<option>Sophomore</option>
						<option>Junior</option>
						<option>Senior</option>
						<option>Post-Bacc</option>
						<option>Graduate PhD</option>
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId='formGridUhID'>
					<Form.Label>UHID</Form.Label>
					<Form.Control
						type='text'
						placeholder='UHID'
						required
						onChange={(e) => handleChange(e)}
						name='uhID'
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId='formGridClassification'>
					<Form.Label>Payment Type</Form.Label>
					<Form.Control
						as='select'
						defaultValue='Choose...'
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
				<Form.Group as={Col} controlId='stripPayment'>
					<CardElement
						options={cardOptions}
					/>
				</Form.Group>
			</Form.Row>

			<Button
				variant='primary'
				type='submit'
				size='lg'
				block
				className='mt-4 mb-4'>
				Submit
			</Button>
		</Form>
	);
};
