import React from 'react';
import { Button, ButtonToolbar, Carousel, CarouselItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Main() {
   return (
      <div className="home">
         {/* <div className="bgDark"> </div> */}
         {/* <img className="firstImg" src={bgImg} alt="First slide" /> */}
         <div className="home-contents">
            <h1 className="home-header">
               We are cougarcs
            </h1>
            <div className="home-text">
               <Carousel id="home-carousel">
                  <CarouselItem>We build</CarouselItem>
                  <CarouselItem>We develop</CarouselItem>
                  <CarouselItem>We succeed</CarouselItem>
               </Carousel>
            </div>
            <LinkContainer to="/about">
               <Button className="learnMoreBtn" variant="primary">
                  Learn More
               </Button>
            </LinkContainer>
         </div>
      </div>
   );
}

export default Main;
