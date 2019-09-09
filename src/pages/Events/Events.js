import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import React from 'react';
import { Container } from 'react-bootstrap';
import events from '../../events';
import './Event.css';

class Events extends React.Component {
  render() {
    return (
      <Container fluid style={{ padding: '2em' }}>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
          fixedWeekCount={false}
          
        />
      </Container>
    );
  }
}
export default Events;
