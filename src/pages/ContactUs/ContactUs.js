import React, { lazy, Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
import { MetaData } from '../../components/Meta/MetaData';

const ContactForm = lazy(() =>
	import('../../components/ContactForm/ContactForm')
);

const meta = {
	title: 'Contact Us',
	desc: 'Get in touch with us.',
	url: 'https://cougarcs.com/contactus',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const ContactUs = () => {
	return (
		<div>
			<MetaData {...meta} />
			<Suspense fallback={<Loading />}>
				<ContactForm />
			</Suspense>
		</div>
	);
};

export default ContactUs;
