import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import hackathons from '../../data/hackathonsList';
import HackathonComp from '../../components/Hackathon/HackathonsComp';
import './Hackathon.css';
import { MetaData } from '../../components/Meta/MetaData';

const Hackathon = () => {
	const [currTime] = useState(new Date().toISOString().split('T')[0]);

	const sortedHackathon = hackathons.sort((a, b) =>
		a.year.concat(a.startDate) > b.year.concat(b.startDate) ? 1 : -1
	);

	const [upcoming] = useState(
		sortedHackathon
			.filter(
				(hackathonlist) =>
					hackathonlist.year.concat(hackathonlist.endDate) > currTime
			)
			.map((hackathonlist) => (
				<HackathonComp hackathonlist={hackathonlist} key={hackathonlist.id} />
			))
	);

	const [pastHackathon] = useState(
		sortedHackathon
			.filter(
				(hackathonlist) =>
					hackathonlist.year.concat(hackathonlist.endDate) < currTime
			)
			.map((hackathonlist) => (
				<HackathonComp hackathonlist={hackathonlist} key={hackathonlist.id} />
			))
			.reverse()
	);

	const meta = {
		title: 'Hackathon',
		desc: 'View upcomming and past hackatons.',
		url: 'https://cougarcs.com/hackathons',
		img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
	};

	return (
		<>
			<MetaData {...meta} />
			<Container className='hackathonCard' fluid>
				<h2>Upcoming Hackthons</h2>
				<div className='hackathonLogos'>
					{upcoming.length ? (
						upcoming
					) : (
						<h3 className='no-upcoming'>No Upcoming Hackathon...</h3>
					)}
				</div>
				<h2>Past Hackathons</h2>
				<div className='hackathonLogos past'>
					{pastHackathon.length ? (
						pastHackathon
					) : (
						<h3 className='no-upcoming'>No Past Hackathon...</h3>
					)}
				</div>
			</Container>
		</>
	);
};

export default Hackathon;
