import React from 'react'
import './Event.css'
import { LinkContainer } from 'react-router-bootstrap';
import {Card, Button} from 'react-bootstrap';


function Event({imgSrc, eventName}) {
  return (
    
      <div className= "container-event">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgSrc} />
          <Card.Body>
            <Card.Title>{eventName}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <LinkContainer to={`/gallery/${eventName}`} className="eventLink">
              <Button> {eventName} </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </div>
    
  )
}

export default Event
