import React from 'react'
import './Event.css'
import { LinkContainer } from 'react-router-bootstrap';
import {Card, Button} from 'react-bootstrap';


function Event({imgSrc, eventName}) {
  return (
    
      <div className= "container-event">
        <Card style={{ width: '18rem' }}>
          <Card.Img className="cardImage" variant="top" src={imgSrc} />
          <Card.Body>
            <Card.Title>{eventName}</Card.Title>
            <Card.Text>
              information goes here?
            </Card.Text>
            <LinkContainer to={`/gallery/${eventName}`} className="eventLink">
              <Button>See More</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </div>
    
  )
}

export default Event
