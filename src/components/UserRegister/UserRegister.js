import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './UserRegister.css';

import { Payment } from '../Payment/Payment';

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(PUBLIC_KEY);
const UserRegister = () => {
	return (
		<div className='container formContainer mt-4'>
			<h1 className='formHeader'>Register</h1>
			<Elements stripe={stripePromise}>
				<Payment />
			</Elements>
		</div>
	);
};

export default UserRegister;
