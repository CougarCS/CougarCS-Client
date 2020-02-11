// // year-month-day
// export default [
//   {
//     id: 0,
//     title: "Paycom info session",
//     start: new Date(2020, 1, 11, 17, 30),
//     end: new Date(2020, 1, 11, 19, 0),
//   },
//   // {
//   //   title: 'CougarCS First Meeting-Orientation',
//   //   date: '2019-08-29',
//   //   time: '6:00 – 7:30pm',
//   //   description: '',
//   //   location: 'TBD'
//   // },
//   // {
//   //   title: 'Credera Info Session-Fair',
//   //   date: '2019-09-03',
//   //   time: '5:30 – 8:00pm',
//   //   description: '',
//   //   location: 'TBD'
//   // },
//   // {
//   //   title: 'Facebook Coding Interview Workshop',
//   //   date: '2019-09-04',
//   //   time: '6:00 – 8:00pm',
//   //   description: '',
//   //   location: 'SW 101'
//   // },
//   // {
//   //   title: 'Pariveda Solutions Interview-Resume Workshop',
//   //   date: '2019-09-05',
//   //   time: '5:30 – 8:00pm',
//   //   description: '',
//   //   location: 'PGH 232'
//   // },
//   // {
//   //   title: 'Fast Enterprise Info Session-Trivia Night',
//   //   date: '2019-09-10',
//   //   time: '5:30 – 8:00pm',
//   //   description: '',
//   //   location: 'TBD'
//   // },
//   // {
//   //   title: 'Computer Science Career Fair',
//   //   date: '2019-09-11',
//   //   time: '10:00am – 2:00pm',
//   //   description: '',
//   //   location: 'TBD'
//   // },
//   // {
//   //   title: 'Paycom Info Session',
//   //   date: '2019-09-12',
//   //   time: '5:30 – 8:00pm',
//   //   description: '',
//   //   location: 'PGH 232'
//   // },
//   // {
//   //   title: 'Intro to Interview 101',
//   //   date: '2019-09-19',
//   //   time: '5:30 – 7:00pm',
//   //   description: 'TBD',
//   //   location: 'PGH 563'
//   // },
//   // {
//   //   title: 'ExxonMobile Info Session',
//   //   date: '2019-09-25',
//   //   time: '5:30 – 7:00pm',
//   //   description: `Come and join Chris White from Exxon Mobile as he tells us about the kind of opportunities available at Exxon. This is a great opportunity for students looking to enter the O&G industry full-time, part-time or is looking for internships.


//   //   Please bring your updated resume. There will be drinks and refreshments available for the first 20-30 people.

//   //   For more information please contact us at info@cougarcs.com`,
//   //   location: 'PGH 232'
//   // },
// ];

import axios from 'axios';

let url = `https://www.googleapis.com/calendar/v3/calendars/aeu0ag4i5a7aag0hkvco4goung@group.calendar.google.com/events?key=AIzaSyBZcSmQlmAJa0h0prJhOLUe1_Ssk57iHkE`

export default function getEvents(callback) {
  const request = axios.get(url)
    .then(resp => {
      const events = []
      // console.log(resp.data);

      resp.data.items.map((event) => {
        if (event.start === undefined) {
          return;
        }
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        })
      })
      console.log(events);

      return ["test"]
    }).catch((error) => {
      console.log(error);
    })
}


