import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>CougarCS - Contact Us</title>
            </Helmet>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;
