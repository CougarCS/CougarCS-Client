import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Loading from '../../components/Loading/Loading';
import './Event.css';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import { sanitize } from 'dompurify';
import AddToCalendar from '../../components/AddToCalendar/AddToCalendar';
import { Helmet } from 'react-helmet';

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

const Events = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);

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

	useEffect(() => {
		axios
			.get(url)
			.then((resp) => {
				const events = [];
				addEvents(resp.data.futureEvents, events);
				addEvents(resp.data.pastEvents, events);

				setEvents(events);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Helmet>
				<title>Calendar</title>
			</Helmet>
			{loading ? (
				<div className='load'>
					<Loading className='loader' />
				</div>
			) : (
				<div className='event-container'>
					<Calendar
						localizer={localizer}
						events={events}
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
					Date: {moment(desc.startDate).format('dddd, MMMM Do YYYY, h:mm a')} -{' '}
					{moment(desc.endDate).format('h:mm a')}
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
