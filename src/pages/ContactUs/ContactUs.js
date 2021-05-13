import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { MetaData } from '../../components/Meta/MetaData';

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
			<ContactForm></ContactForm>
		</div>
	);
};

export default ContactUs;
