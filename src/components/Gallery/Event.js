import React from 'react'
import './Event.css'

function Event({imgSrc, eventName}) {
  return (
    <div>
    <img className = "img-cat" src= {imgSrc} />
    <h3> {eventName} </h3>
    </div>
  )
}

export default Event
