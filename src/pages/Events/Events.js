import React from "react";
import "./Event.css";

class Events extends React.Component {
  render() {
    return (
      <div className="event-container">
        {/* <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
          fixedWeekCount={false}
        /> */}

        <iframe
          title="CougarCS Calendar"
          src={
            "https://calendar.google.com/calendar/embed?src=aeu0ag4i5a7aag0hkvco4goung%40group.calendar.google.com&ctz=America%2FChicago"
          }
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            frameBorder: 0,

          }}
        ></iframe>
      </div>
    );
  }
}
export default Events;
