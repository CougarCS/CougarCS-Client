import React from 'react';
import { Card, Button } from 'react-bootstrap';
import AddToCalendar from '../AddToCalendar/AddToCalendar';

const Panel = (desc) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src='http://placehold.jp/24/373940/b2aea6/268x180.png'
			/>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card&apos;s content.
				</Card.Text>
				<Button variant='btn btn-success'>
					Add To Calendar <AddToCalendar event={desc} />{' '}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Panel;
