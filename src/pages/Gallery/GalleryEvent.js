import React from 'react';
import { Container } from 'react-bootstrap';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import { Navigate, Link, useParams } from 'react-router-dom';
import 'lightgallery.js/dist/css/lightgallery.css';
import './GalleryEvent.css';

import events from '../../data/gallery';
import { MetaData } from '../../components/Meta/MetaData';

const GalleryEvent = () => {
	let match = useParams();
	let currentEvent = {};

	events.forEach((e, _i) => {
		if (e.link === match.event) {
			currentEvent = e;
		}
	});

	if (Object.keys(currentEvent).length === 0) {
		return <Navigate from='*' to='/404' />;
	} else {
		const meta = {
			title: currentEvent.name,
			desc: `${currentEvent.name} event pictures`,
			url: `https://cougarcs.com/${currentEvent.link}`,
			img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
		};
		return (
			<>
				<MetaData {...meta} />
				<Container fluid className='contained gallery-event'>
					<Link to='/gallery' className='event-back'>
						<i className='fas fa-chevron-left'></i> Back
					</Link>
					<h1 className='event-heading'>{currentEvent.name}</h1>

					<LightgalleryProvider>
						<div className='gallery-grid'>
							{currentEvent.pictures.map((picture, i) => (
								<LightgalleryItem
									group={currentEvent.link}
									src={picture}
									key={i}
								>
									<img src={picture} alt={currentEvent.name} />
								</LightgalleryItem>
							))}
						</div>
					</LightgalleryProvider>
				</Container>
			</>
		);
	}
};

export default GalleryEvent;
