import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import './Modal.css';
import warn from '../../assets/warn.png';

export const ErrorModal = (props) => {
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<Image className='warning-image' src={warn} />
				<Modal.Title>Error!</Modal.Title>
				<p>
					Something went wrong. Please try again or contact{' '}
					<a href='mailto:treasurer@cougarcs.com'>treasurer@cougarcs.com</a> to
					pay with an alternative method.
				</p>
			</Modal.Body>
		</Modal>
	);
};
export default ErrorModal;
