import React from 'react';
import { Button, Carousel, CarouselItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Main() {
<<<<<<< HEAD
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
=======
  return (
    <div className="ani">
      <div className="bgDark">
        {/* <img className="firstImg" src={bgImg} alt="First slide" /> */}
        <div className="main-text">
          <p className="firstP">
            WE ARE COUGARCS
            <br></br>
            WE COMPUTE STUDENT SUCCESS
          </p>
          <LinkContainer to="/about">
            <ButtonToolbar>
              <Button className="learnMoreBtn" variant="success">
                Learn More
              </Button>
            </ButtonToolbar>
          </LinkContainer>
        </div>
>>>>>>> af7363bef6dbc745fc88f6d33763d2cb2fc5b759
      </div>
   );
}

export default Main;
