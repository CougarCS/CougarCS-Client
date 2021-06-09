import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { google, outlook, ics } from 'calendar-link';

const AddToCalendar = ({ event }) => {
	const { startDate, endDate } = event;

	return startDate !== '' && endDate !== '' ? (
		<Dropdown.Menu>
			<Dropdown.Item
				href={google({
					...event,
					start: startDate.toISOString(),
					end: endDate.toISOString(),
				})}
				target='_blank'
				rel='noopener nofollow'
			>
				Google
			</Dropdown.Item>
			<Dropdown.Item
				href={outlook({
					...event,
					start: startDate.toISOString(),
					end: endDate.toISOString(),
				}).replace('&rru=addevent', '')}
				target='_blank'
				rel='noopener nofollow'
			>
				Outlook.com
			</Dropdown.Item>
			<Dropdown.Item
				href={ics({
					...event,
					start: startDate.toISOString(),
					end: endDate.toISOString(),
				})}
			>
				Others
			</Dropdown.Item>
		</Dropdown.Menu>
	) : null;
};

export default AddToCalendar;
