import React, { Component } from 'react';
import Typed from 'typed.js';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

const animateText = () => (
  new Typed('#typed', {
    strings: ["ARE <span style='color:red'>COUGARCS</span>", "COMPUTE <br>STUDENT <span style='color:#FFD700'>SUCCESS</span>"],
    typeSpeed: 70,
    backSpeed: 75,
    loop: true,
  })
);

// Class component so you can use `componentDidMount` lifecycle 
export default class AboutMe extends Component {
  componentDidMount() {
    // Will be executed after first `render`
    animateText();
  }

  render() {
    return (
      <div className="ani">
        <div className="main-text">
          <p className="firstP">
            WE <span id="typed" />
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
}