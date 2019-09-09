import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Main() {
  return (
    <div className="ani">
      <div className="bgDark"> </div>
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
    </div>
  );
}

export default Main;
