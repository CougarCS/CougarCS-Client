import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from "react-helmet";
import { Container, Card } from 'react-bootstrap';

import './Gallery.css';
import events from '../../data/gallery';

function Gallery() {

	return (
		<>
			<Helmet>
				<title>Gallery</title>
			</Helmet>
			<Container fluid className='contained hero hero-gallery hero-small'>
				<h1>Events Gallery</h1>
			</Container>
			<Container fluid className='contained'>
				<div className="events">
					{events.map((event) =>
						event.show ? (
							<Card className='gallery-card' key={event.id}>
								<Card.Img src={event.image} />
								<Card.Body>
									<Card.Title>{event.name}</Card.Title>
									<LinkContainer to={`/gallery/${event.link}`} className='event-link'><a>View Event</a></LinkContainer>
								</Card.Body>
							</Card>
						) : null
					)}
				</div>
			</Container>
		</>
	);
}

export default Gallery;
