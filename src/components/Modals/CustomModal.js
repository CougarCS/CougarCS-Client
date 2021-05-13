import React from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.css';

export const CustomModal = (props) => {
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton />
			<Modal.Body>{props.children}</Modal.Body>
		</Modal>
	);
};
export default CustomModal;
