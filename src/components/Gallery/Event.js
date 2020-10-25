import React from 'react'
import './Event.css'

function Event({imgSrc, eventName}) {
  return (
    <div className= "container-event">
    <img className = "img-cat" src= {imgSrc} />
    <h3> {eventName} </h3>
    </div>
  )
}

export default Event
