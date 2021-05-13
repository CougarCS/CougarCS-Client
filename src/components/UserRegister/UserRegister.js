import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './UserRegister.css';

import { Payment } from '../Payment/Payment';
import { Helmet } from 'react-helmet';

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(PUBLIC_KEY);
const UserRegister = () => {
	return (
		<div className='container formContainer mt-4'>
			<Helmet>
				<title>Register</title>
			</Helmet>
			<h1 className='formHeader'>Register</h1>
			<Elements stripe={stripePromise}>
				<Payment />
			</Elements>
		</div>
	);
};

export default UserRegister;
