import React from 'react'
import {Modal, Image} from 'react-bootstrap';
import './Modal.css';
import check from '../../assets/check.png'

export const SuccessModal = (props) => {

	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton>
			</Modal.Header>
			<Modal.Body>
				<Image className="warning-image" src={check} />
				<Modal.Title>Success!</Modal.Title>
				<p>
					We received your payment. Please check your email for confirmation.
				</p>
			</Modal.Body>
		</Modal>
	)
}
export default SuccessModal
