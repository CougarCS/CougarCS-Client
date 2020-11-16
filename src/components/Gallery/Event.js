import React from 'react'
import './Event.css'
import { LinkContainer } from 'react-router-bootstrap';


function Event({imgSrc, eventName}) {
  return (
    
      <div className= "container-event">
        <img className = "img-cat" src= {imgSrc} />
        <LinkContainer to={`/gallery/${eventName}`} className="eventLink">
          <h3> {eventName} </h3>
        </LinkContainer>
      </div>
    
  )
}

export default Event
