import axios from 'axios';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import Loading from '../../components/Loading/Loading';
import './Event.css';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import { sanitize } from 'dompurify';
import AddToCalendar from '../../components/AddToCalendar/AddToCalendar';
import { useQuery, useQueryClient } from 'react-query';
import { MetaData } from '../../components/Meta/MetaData';
import { parse, startOfWeek, getDay, parseISO } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import local from 'date-fns/locale/en-US';

const locales = {
	'en-US': local,
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const url = `${process.env.REACT_APP_API_URL}/api/events`;

const fetchEvents = async () => {
	const res = await axios.get(url);
	const data = res.data.events;
	return data.map((event) => ({
		...event,
		start: parseISO(event.start),
		end: parseISO(event.end),
	}));
};

const formatDates = (date) => {
	return format(
		utcToZonedTime(date, 'America/Chicago'),
		'EEEE, MMMM do yyyy, h:mm a zzz',
		{ timeZone: 'America/Chicago' }
	);
};

const meta = {
	title: 'Calendar',
	desc: 'Checkout our events.',
	url: 'https://cougarcs.com/calendar',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const Events = () => {
	const queryClient = useQueryClient();
	/*const { data, isFetching } = useQuery('events', fetchEvents, {
		initialData: () => queryClient.getQueryData('events'),
		staleTime: 300000,
	});*/
	
	const data = []
	const isFetching = true;
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
		setDesc({
			title: '',
			startDate: '',
			endDate: '',
			description: '',
		});
	};

	const [desc, setDesc] = useState({
		title: '',
		startDate: '',
		endDate: '',
		description: '',
	});

	return (
		<>
			<MetaData {...meta}>
				<link
					href='https://cdn.jsdelivr.net/npm/react-big-calendar@0.23.0/lib/css/react-big-calendar.css'
					rel='stylesheet'
				/>
			</MetaData>
			{isFetching ? (
				<div className='load'>
					<Loading className='loader' />
				</div>
			) : (
				<div className='event-container'>
					<Calendar
						localizer={localizer}
						events={data}
						startAccessor='start'
						endAccessor='end'
						style={{ height: '100%' }}
						views={{
							month: true,
							agenda: true,
						}}
						popup={true}
						drilldownView='agenda'
						popupOffset={{ x: 30, y: 20 }}
						onSelectEvent={(e) => {
							setDesc({
								title: e.title,
								startDate: e.start,
								endDate: e.end,
								description: e.desc,
							});
							setShow(true);
						}}
					/>
				</div>
			)}

			<Modal show={show} size='lg' onHide={handleClose} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>{desc.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					From: {desc.startDate ? formatDates(desc.startDate) : ''} <br /> To:{' '}
					{desc.endDate ? formatDates(desc.endDate) : ''}
					<br />
					<hr />
					Description:{' '}
					{
						<div
							className='eventModalDesc'
							dangerouslySetInnerHTML={{ __html: sanitize(desc.description) }}
						/>
					}
				</Modal.Body>
				<Modal.Footer>
					<Dropdown>
						<Dropdown.Toggle variant='success' id='dropdown-basic'>
							Add To Calendar
						</Dropdown.Toggle>

						<AddToCalendar event={desc} />
					</Dropdown>

					<Button variant='danger' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Events;
