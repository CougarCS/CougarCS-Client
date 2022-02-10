import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Payment } from '../Payment/Payment';
import { MetaData } from '../Meta/MetaData';
import './UserRegister.css';

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(PUBLIC_KEY);

const meta = {
	title: 'Register',
	desc: 'Become a CougarCS member',
	url: 'https://cougarcs.com/gallery',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const UserRegister = () => {
	return (
		<>
			<MetaData {...meta} />
			<div className='container formContainer mt-4'>
				<h1 className='formHeader mt-4'>Register</h1>
				<Elements stripe={stripePromise}>
					<Payment />
				</Elements>
			</div>
		</>
	);
};

export default UserRegister;
