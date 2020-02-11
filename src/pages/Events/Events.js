import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import events from '../../events';
import './Event.css';

// const localizer = momentLocalizer(moment)

const Events = () => (
  <div className='event-container'>

    {/* <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "100%" }}
    /> */}
    <iframe
      title='CougarCS Calendar'
      src={'https://calendar.google.com/calendar/embed?src=aeu0ag4i5a7aag0hkvco4goung%40group.calendar.google.com&ctz=America%2FChicago'}
      style={{
        border: 0,
        width: '100%',
        height: '100%',
        frameBorder: 0
      }}
    ></iframe>
  </div>
)
export default Events;
