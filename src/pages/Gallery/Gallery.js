import React from 'react'
import './Gallery.css';
import { Container } from 'react-bootstrap'
function Gallery() {
  const images = [""]
  return (
    <Container>
    <div className = "gallery_container">
    <h1 className= "events_text"> Events Gallery </h1>
    <div className = "cats">
    <img className = "img-cat" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
    <img className = "img-cat" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
    <img className = "img-cat" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
    <img className = "img-cat" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
    <img className = "img-cat" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
    <img className = "img-cat" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
    <img className = "img-cat" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
    </div>
    </div> 
    </Container>
  )
}

export default Gallery
