import React from 'react';
import { Container } from 'react-bootstrap';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import { Redirect, Link } from 'react-router-dom';
import './GalleryEvent.css';
import 'lightgallery.js/dist/css/lightgallery.css';

import events from '../../data/gallery';
import { MetaData } from '../../components/Meta/MetaData';

const GalleryEvent = ({ match }) => {
	let currentEvent = {};

	events.forEach((e, i) => {
		if (e.link === match.params.event) {
			currentEvent = e;
		}
	});

	if (Object.keys(currentEvent).length === 0) {
		return <Redirect from='*' to='/404' />;
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
