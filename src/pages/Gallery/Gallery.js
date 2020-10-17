import React from 'react'
import Event from '../../components/Gallery/Event'
import './fancybox/jquery.fancybox.min.css'
import './Gallery.css';
// import './fancybox/jquery.fancybox.js'
// import './fancybox/jquery.fancybox.min.js'
import { Container } from 'react-bootstrap'
function Gallery() {
  const images = [""]
  return (
    <div className = "contain">
    <div className = "gallery_container">
    <h1 className= "events_text"> Events Gallery </h1>
    <div className = "cats">


    <Event imgSrc="https://uh.edu/nsm/_images/cosc/news/2020/20200207-code-for-good.jpg" eventName = "Event 1" />
    <Event imgSrc="https://www.uh.edu/nsm/_images/nsm/spiffs/2020/nsm-spiff-20200205-fulbright-specialist.jpg" eventName = "Event 2" />
    <Event imgSrc="https://uh.edu/nsm/_images/cosc/news/20150204-homeland-security-2.jpg" eventName = "Event 3" />
    <Event imgSrc="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" eventName = "Event 4" />
    <Event imgSrc="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" eventName = "Event 5" />
    <Event imgSrc="https://www.uh.edu/nsm/_images/cosc/banners/coscpage-graduation.jpg" eventName = "Event 6" />
    <Event imgSrc="https://www.uh.edu/nsm/_images/cosc/banners/coscpage-graduation.jpg" eventName = "Event 7" />
  
    
    
    </div>
    </div> 
    </div>
  )
}

export default Gallery
