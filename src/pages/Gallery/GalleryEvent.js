import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './GalleryEvent.css';
import 'lightgallery.js/dist/css/lightgallery.css';

import events from '../../data/gallery';

const GalleryEvent = ({ match }) => {
    let currentEvent = {};

    events.forEach((e, i) => {
        if (e.link == match.params.event) {
            currentEvent = e;
        }
    });

    if (Object.keys(currentEvent).length == 0) {
        return (
            <Redirect from='*' to='/404' />
        )
    } else {
        return (
            <Container fluid className='contained gallery-event'>
                <Link to="/gallery" className='event-back'>
                    <i class="fas fa-chevron-left"></i> Back
                </Link>
                <h1 className='event-heading'>{currentEvent.name}</h1>
                {/* <div className='event-metas'>
                    <div className='event-meta'>
                        <i class="fas fa-calendar-alt"></i>
                        <span>{currentEvent.date}</span>
                    </div>
                    <div className='event-meta'>
                        <i class="fas fa-map-marked"></i>
                        <span>{currentEvent.location}</span>
                    </div>
                </div> */}

                <LightgalleryProvider>
                    <div className="gallery-grid">
                        {currentEvent.pictures.map((picture, i) => (
                            <LightgalleryItem group={currentEvent.link} src={picture} key={i}>
                                <img src={picture} />
                            </LightgalleryItem>
                        ))}
                    </div>
                </LightgalleryProvider>
            </Container>
        );
    }

};

export default GalleryEvent;