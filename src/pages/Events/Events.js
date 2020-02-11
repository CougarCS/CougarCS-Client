// import axios from 'axios';
// import moment from 'moment';
import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
import './Event.css';

// const localizer = momentLocalizer(moment)
// const url = `https://www.googleapis.com/calendar/v3/calendars/aeu0ag4i5a7aag0hkvco4goung@group.calendar.google.com/events?key=AIzaSyBZcSmQlmAJa0h0prJhOLUe1_Ssk57iHkE`;

const Events = () => {

  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   axios.get(url)
  //     .then(resp => {
  //       const events = []
  //       resp.data.items.map((event) => {
  //         if (event.start === undefined) {
  //           return;
  //         }
  //         events.push({
  //           start: event.start.date || event.start.dateTime,
  //           end: event.end.date || event.end.dateTime,
  //           title: event.summary,
  //         })
  //       })
  //       setEvents(events);
  //     }).catch((error) => {
  //       console.log(error);
  //     })
  // }, [])
  return (
    < div className='event-container' >
      {/* <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      /> */}
      <iframe
        title='CougarCS Calendar'
        src={'https://www.google.com/calendar/embed?showTitle=0&showCalendars=0&mode=AGENDA&wkst=1&bgcolor=%23FFFFFF&src=aeu0ag4i5a7aag0hkvco4goung%40group.calendar.google.com&color=%23711616&ctz=America%2FChicago'}
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          frameBorder: 0
        }}
      ></iframe>
    </div >
  )
}
export default Events;
