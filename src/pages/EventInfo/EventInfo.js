import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {
    LightgalleryProvider,
    LightgalleryItem
    // withLightgallery,
    // useLightgallery
  } from "react-lightgallery";
import { Link } from 'react-router-dom';
import calendarSVG from '../../assets/calendar.svg';
import mapSVG from '../../assets/map.svg';

import './EventInfo.css';
import 'lightgallery.js/dist/css/lightgallery.css';

// location, date, place, info
const data = [
    {
        name: "Really Cool Event",
        location: "Houston, TX",
        date: "11/21/2020", 
        info: "This event was really cool. One of the CS officers is in the picture.",
        pictures: ["https://images.unsplash.com/photo-1594818898109-44704fb548f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1594818896795-35ad7bcf3c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1594818896744-57eca4d47b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"]
    },
    {
        name: "Coding Time",
        location: "Houston, TX",
        date: "10/20/2020", 
        info: "Just 3 guys coding",
        pictures: ["https://images.unsplash.com/photo-1594818898109-44704fb548f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"]
    },
    {
        name: "Meeting Event",
        location: "Houston, TX",
        date: "09/16/2020", 
        info: "Just had a meeting and decided to take a picture",
        pictures: ["https://images.unsplash.com/photo-1594818898109-44704fb548f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1594818896795-35ad7bcf3c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"]
    }
];

// this function is used for the buttons at bottom of page to get next or previous index in data
const getNextIndex = (curr, forward) => {
    if(forward){
        curr = (curr + 1) % data.length;
    } else { 
        curr = (curr === 0) ? data.length - 1: curr - 1; 
    }

    return curr;
};

const PhotoItem = ({ image, thumb, group }) => (
    <div style={{ maxWidth: "500px", width: "350px", padding: "10px", margin: "0 2em" }}>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} style={{ width: "100%" }} />
      </LightgalleryItem>
    </div>
);

const EventInfo = ({match}) => {
    const {params: {event}} = match;

    let currEvent = '';
    let currIndex = -1;
    
    data.forEach((curr, index) => {
        if(event === curr.name){
            currEvent = curr;
            currIndex = index;
        }
    });

    return (
        <Container fluid style={{ padding: '2em' }}>
            <div>
                <Link to="/gallery">Back to Gallery</Link>
                <h1 style={{ padding: '.5em 0 .5em' }}>{event}</h1>
                <img className='icons' src={calendarSVG} alt='svg'></img>
                <p className='eventDL' >{currEvent.date}</p>
                <img className='icons' src={mapSVG} alt='svg'></img>
                <p className='eventDL'>{currEvent.location}</p>
                <p>{currEvent.info}</p>
            
                <LightgalleryProvider>
                    <div className="imageGallery"
                        style={{
                        display: "flex",
                        textAlign: "center",
                        flexWrap: "wrap",
                        justifyContent: "center"
                        }}
                    >
                        {currEvent.pictures.map((p, idx) => (
                            <PhotoItem key={idx} image={p} group="pictures" />
                        ))}
                    </div>
                </LightgalleryProvider>
            </div>

            <div>
            <Row>
                <Col md='6'>
                    <Link to={`/gallery/${data[getNextIndex(currIndex, false)].name}`}>
                        <Button variant="outline-secondary" size="lg" class="buttons" block>
                            Previous
                        </Button>
                    </Link>
                </Col>
                <Col md='6'>
                    <Link to={`/gallery/${data[getNextIndex(currIndex, true)].name}`}>
                        <Button variant="outline-secondary" size="lg" class="buttons" block>
                            Next
                        </Button>
                    </Link>
                </Col>
            </Row>
            

            </div>
        </Container>
    );
};

export default EventInfo;