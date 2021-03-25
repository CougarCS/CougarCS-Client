import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './fancybox/jquery.fancybox.min.css'
import './Gallery.css';
// import './fancybox/jquery.fancybox.js'
// import './fancybox/jquery.fancybox.min.js'
import { Container } from 'react-bootstrap'
import Event from '../../components/Gallery/Event'
import EventInfo from '../EventInfo/EventInfo'


function Gallery() {
  const images = [""]
  return (
    <Container fluid style={{ padding: '2em' }}>
          <div>
            <h1> Events Gallery </h1>
            <div className = "events">
              <Event imgSrc="https://uh.edu/nsm/_images/cosc/news/2020/20200207-code-for-good.jpg" eventName = "Really Cool Event" />
              <Event imgSrc="https://www.uh.edu/nsm/_images/nsm/spiffs/2020/nsm-spiff-20200205-fulbright-specialist.jpg" eventName = "Coding Time" />
              <Event imgSrc="https://uh.edu/nsm/_images/cosc/news/20150204-homeland-security-2.jpg" eventName = "Meeting Event" />          
            </div>
          </div>
    </Container>
  )
}

export default Gallery
