import React from 'react';
import { Card, Button } from 'react-bootstrap';
import AddToCalendar from '../AddToCalendar/AddToCalendar';

const Panel = ({ desc }) => {
	// console.log(desc.desc);
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{desc.title}</Card.Title>
				<Card.Text>{desc.description}</Card.Text>
				<Button variant='btn btn-success'>
					Add To Calendar <AddToCalendar event={desc} />{' '}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Panel;

// add listener
