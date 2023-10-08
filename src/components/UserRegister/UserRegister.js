import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Payment } from '../Payment/Payment';
import PoweredByStripe from '../../assets/poweredByStripe.svg';
import './UserRegister.css';

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(`${PUBLIC_KEY}`);

const UserRegister = () => {
	return (
		<>
			<div className='container formContainer mt-4'>
				<h1 className='formHeader mt-4'>Join Us</h1>
				<Elements stripe={stripePromise}>
					<Payment />
				</Elements>
				<div>
					<a
						href='https://stripe.com/'
						target='_blank'
						rel='nofollow noopener noreferrer'
					>
						<img
							src={PoweredByStripe}
							className='Stripe-logo'
							alt='stripe logo'
						/>
					</a>
				</div>
			</div>
		</>
	);
};

export default UserRegister;
