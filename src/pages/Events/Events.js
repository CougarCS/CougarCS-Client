import React from "react";
import { Container } from "react-bootstrap";
import "./Event.css";

class Events extends React.Component {
  render() {
    return (
      <Container >
        <iframe
          title="calendar"
          src={
            "https://calendar.google.com/calendar/embed?src=aeu0ag4i5a7aag0hkvco4goung%40group.calendar.google.com&ctz=America%2FChicago"
          }
          style={{
            border: 0,
            width: '100vw',
            height: '100vh',
            frameBorder: 0,
            scrolling: "no"
          }}
        ></iframe>
      </Container>
    );
  }
}
export default Events;
