import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Loading from '../../components/Loading/Loading';
import './Event.css';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import { sanitize } from 'dompurify';
import AddToCalendar from '../../components/AddToCalendar/AddToCalendar';
import { Helmet } from 'react-helmet';
import { useQuery, useQueryClient } from 'react-query';

const localizer = momentLocalizer(moment);

const url = 'https://backend.cougarcs.com/api/events';

const addEvents = (eventType, events) => {
	return eventType.map((event) => {
		return events.push({
			start: event.start.date,
			end: event.end.date,
			title: event.summary,
			desc: event?.description ? event.description : 'TBD',
		});
	});
};
const fetchEvents = async () => {
	const res = await axios.get(url);
	const events = [];
	addEvents(res.data.futureEvents, events);
	addEvents(res.data.pastEvents, events);

	return events;
};

const momentDateFromat = (date) => {
	return moment(date).format('dddd, MMMM Do YYYY, h:mm a');
};
const Events = () => {

	const queryClient = useQueryClient();
	const { data, isFetching } = useQuery('events', fetchEvents, {
		initialData: () => queryClient.getQueryData('events'),
		staleTime: 300000
	});
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
			<Helmet>
				<title>Calendar</title>
			</Helmet>
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
					Date: {momentDateFromat(desc.startDate)} -{' '}
					{momentDateFromat(desc.endDate)}
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
						<Dropdown.Toggle variant="success" id="dropdown-basic">
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
