import Carousel, {
	Dots,
	slidesToShowPlugin,
	autoplayPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import axios from 'axios';
import { getDay, parse, parseISO, startOfWeek } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import local from 'date-fns/locale/en-US';
import { sanitize } from 'dompurify';
import React, { useState } from 'react';
import { dateFnsLocalizer } from 'react-big-calendar';
import { Button, Modal } from 'react-bootstrap';
import { useQuery, useQueryClient } from 'react-query';
import AddToCalendar from '../../components/AddToCalendar/AddToCalendar';
import Loading from '../../components/Loading/Loading';
import { MetaData } from '../../components/Meta/MetaData';

import './Event.css';
import Panel from '../../components/Carousel/Panel';

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
// this will change to carousel
const meta = {
	title: 'Calendar',
	desc: 'Checkout our events.',
	url: 'https://cougarcs.com/calendar',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const Events = () => {
	const queryClient = useQueryClient();
	const { data, isFetching } = useQuery('events', fetchEvents, {
		initialData: () => queryClient.getQueryData('events'),
		staleTime: 300000,
	});
	testelement(data);
	const [show, setShow] = useState(false);

	const displayEvents = () => {
		return isFetching ? (
			<Loading />
		) : (
			data.map((val, i) =>
				val?.linkedin ? (
					<div key={i}>
						<a
							href={val.linkedin}
							rel='nofollow noopener noreferrer'
							target='_blank'
						>
							{val.name}
						</a>
					</div>
				) : (
					<div key={i}>{val.name}</div>
				)
			)
		);
	};

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

	const [value, setValue] = useState(0);
	function onChange(value) {
		setValue(value);
	}
	function testelement(data) {
		return <h1>events: {data}</h1>;
	}

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
					<Carousel
						//stuff from calendar that works? some how???
						localizer={localizer}
						events={data}
						startAccessor='start'
						endAccessor='end'
						popup={true}
						//Carousel native options
						value={value}
						onChange={onChange}
						plugins={[
							'infinite',
							'arrows',
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 4,
								},
							},
							{
								resolve: autoplayPlugin,
								options: {
									interval: 8000,
									stopAutoPlayOnHover: true,
								},
							},
						]}
						animationSpeed={1000}
						itemWidth={404}
						offset={50}
						onSelectEvent={(e) => {
							setDesc({
								title: e.title,
								startDate: e.start,
								endDate: e.end,
								description: e.desc,
							});
							setShow(true);
						}}
					>
						{data.map((d, i) => (
							<Panel key={i} desc={d} />
						))}
					</Carousel>
					<Dots value={value} onChange={onChange} number={6} />
					{/* 
					<Calendar
						
						
						style={{ height: '100%' }}
						views={{
							month: true,
							agenda: true,
						}}
						
						drilldownView='agenda'
						popupOffset={{ x: 30, y: 20 }}
						
					/>
					 */}
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
				{/* the button to add to google calendar */}
				<Modal.Footer>
					<Button type='button' className='btn btn-success'>
						Add To Calendar
						<AddToCalendar event={desc} />
					</Button>

					<Button variant='danger' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Events;
