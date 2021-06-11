import React, { lazy, Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import hackathons from '../../data/hackathonsList';
import { MetaData } from '../../components/Meta/MetaData';
import './Hackathon.css';
import Loading from '../../components/Loading/Loading';

const HackathonComp = lazy(() =>
	import('../../components/Hackathon/HackathonsList')
);

const sortHackathon = (curr, prev) =>
	curr.year.concat(curr.startDate) > prev.year.concat(prev.startDate) ? 1 : -1;

const Hackathon = () => {
	const [currTime] = useState(new Date().toISOString().split('T')[0]);

	hackathons.sort(sortHackathon);

	const [upcoming] = useState(
		hackathons
			.filter(
				(hackathonlist) =>
					hackathonlist.year.concat(hackathonlist.endDate) > currTime
			)
			.map((hackathonlist) => (
				<HackathonComp
					hackathonlist={hackathonlist}
					key={hackathonlist.id}
					isPast={false}
				/>
			))
	);

	const [pastHackathon] = useState(
		hackathons
			.filter(
				(hackathonlist) =>
					hackathonlist.year.concat(hackathonlist.endDate) < currTime
			)
			.map((hackathonlist) => (
				<HackathonComp
					hackathonlist={hackathonlist}
					key={hackathonlist.id}
					isPast={true}
				/>
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
			<Suspense fallback={<Loading />}>
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
			</Suspense>
		</>
	);
};

export default Hackathon;
