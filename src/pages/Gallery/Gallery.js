import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import events from '../../data/gallery';
import { MetaData } from '../../components/Meta/MetaData';
import './Gallery.css';

const meta = {
	title: 'Gallery',
	desc: 'Pictures of events.',
	url: 'https://cougarcs.com/gallery',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const Gallery = () => {
	return (
		<>
			<MetaData {...meta} />
			<Container fluid className='contained hero hero-gallery hero-small'>
				<h1>Events Gallery</h1>
			</Container>
			<Container fluid className='contained'>
				<div className='events test'>
					{events.map((event) =>
						event.show ? (
							<Card className='gallery-card' key={event.id}>
								<Card.Img src={event.image} />
								<Card.Body>
									<Card.Title>{event.name}</Card.Title>
									<Link to={`/gallery/${event.link}`} className='event-link'>
										<p id='view-event'>View Event</p>
									</Link>
								</Card.Body>
							</Card>
						) : null
					)}
				</div>
			</Container>
		</>
	);
};

export default Gallery;
