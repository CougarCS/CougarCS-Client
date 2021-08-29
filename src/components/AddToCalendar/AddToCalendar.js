import React from 'react';
import { Button } from 'react-bootstrap';
import { google } from 'calendar-link';

const AddToCalendar = ({ event }) => {
	const { startDate, endDate } = event;

	return (
		startDate !== '' &&
		endDate !== '' && (
			<Button
				type='button'
				className='btn btn-success'
				href={google({
					...event,
					start: startDate.toISOString(),
					end: endDate.toISOString(),
				})}
				target='_blank'
				rel='noopener nofollow'
			>
				Google
			</Button>
		)
	);
};

export default AddToCalendar;
