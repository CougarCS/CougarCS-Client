import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Loading from '../../components/Loading/Loading';
import './Event.css';
const localizer = momentLocalizer(moment)
const url = `https://cougarcs-backend.herokuapp.com/api/events`;

const Events = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(url)
      .then(resp => {
        const events = []
        resp.data.futureEvents.map((event) => {
          return events.push({
            start: event.start.date,
            end: event.end.date,
            title: event.summary,
            desc: event.description ? event.description : 'TBD'
          })
        })

        resp.data.pastEvents.map((event) => {
          return events.push({
            start: event.start.date,
            end: event.end.date,
            title: event.summary,
            desc: event.description ? event.description : 'TBD'
          })
        })
        setEvents(events);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
      })
  }, [])
  return (

    loading ? <div className="load"> <Loading className="loader" /> </div > :
      < div className='event-container' >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          views={{
            month: true,
            agenda: true
          }}
          popup={true}
          drilldownView="agenda"
          popupOffset={{ x: 30, y: 20 }}
        />

        {/* <iframe
        title='CougarCS Calendar'
        src={'https://www.google.com/calendar/embed?showTitle=0&showCalendars=0&mode=MONTH&wkst=1&bgcolor=%23FFFFFF&src=aeu0ag4i5a7aag0hkvco4goung%40group.calendar.google.com&color=%23711616&ctz=America%2FChicago'}
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          frameBorder: 0
        }}
      ></iframe> */}
      </div >

  )
}
export default Events;
