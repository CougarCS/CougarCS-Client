import React from 'react';
import { Container } from 'react-bootstrap';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Redirect, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './GalleryEvent.css';
import 'lightgallery.js/dist/css/lightgallery.css';

import events from '../../data/gallery';

const GalleryEvent = ({ match }) => {
    let currentEvent = {};

    events.forEach((e, i) => {
        if (e.link === match.params.event) {
            currentEvent = e;
        }
    });

    if (Object.keys(currentEvent).length === 0) {
        return (
            <Redirect from='*' to='/404' />
        );
    } else {
        return (
            <>
                <Helmet>
                    <title>{currentEvent.name}</title>
                </Helmet>
                <Container fluid className='contained gallery-event'>
                    <Link to="/gallery" className='event-back'>
                        <i className="fas fa-chevron-left"></i> Back
                </Link>
                    <h1 className='event-heading'>{currentEvent.name}</h1>

                    <LightgalleryProvider>
                        <div className="gallery-grid">
                            {currentEvent.pictures.map((picture, i) => (
                                <LightgalleryItem group={currentEvent.link} src={picture} key={i}>
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