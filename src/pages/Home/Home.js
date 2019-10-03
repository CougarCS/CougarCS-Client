
import React, { Component } from 'react'
import Typed from 'typed.js';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

const animateText = () => (
  new Typed('#typed', {
    strings: [
      "ARE <span style='color:red;'>COUGAR</span>CS",
      "COMPUTE <br>STUDENT <span style='color:#FFD700'>SUCCESS</span>"
    ],
    typeSpeed: 60,
    backSpeed: 60,
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
      <div className="home">
        <div className="home-contents">
          <p className="home-text">
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
