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
      <div className = "contain">
        <div className = "gallery_container">
          <h1 className= "events_text"> Events Gallery </h1>
          <div className = "cats">
            <Event imgSrc="https://uh.edu/nsm/_images/cosc/news/2020/20200207-code-for-good.jpg" eventName = "Really Cool Event" />
            <Event imgSrc="https://www.uh.edu/nsm/_images/nsm/spiffs/2020/nsm-spiff-20200205-fulbright-specialist.jpg" eventName = "Event 2" />
            <Event imgSrc="https://uh.edu/nsm/_images/cosc/news/20150204-homeland-security-2.jpg" eventName = "Event 3" />
            <Event imgSrc="https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/70841325_2418792544856051_2932152488728702908_n.jpg?_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Ems7pu0dtYQAX_6lI3-&_nc_tp=15&oh=7ad4d9cc1f52c4cbdbe91eba8ed15360&oe=5FBC1A5A" eventName = "Event 4" />
            <Event imgSrc="https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/72967411_146632516572743_4438491460078469674_n.jpg?_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=hvIhs-IxovYAX-I-CVL&tp=19&oh=5e2f9544aad3ca7109e6bac614bc2564&oe=5FBC7E44" eventName = "Event 5" />
            <Event imgSrc="https://www.uh.edu/nsm/_images/cosc/banners/coscpage-graduation.jpg" eventName = "Event 6" />
            <Event imgSrc="https://www.uh.edu/nsm/_images/cosc/banners/coscpage-graduation.jpg" eventName = "Event 7" />
          </div>
        </div> 
      </div>
  )
}

export default Gallery
