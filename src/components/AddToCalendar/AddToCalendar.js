import React from 'react'
import { Dropdown } from 'react-bootstrap';
import moment from 'moment';
import { google, outlook, ics } from "calendar-link";

const AddToCalendar = ({ event }) => {
    const { startDate, endDate } = event;

    return (

        <Dropdown.Menu >
            <Dropdown.Item href={google({ ...event, start: moment(startDate).toISOString(), end: moment(endDate).toISOString() })} target='_blank'
                rel='noopener nofollow'>Google</Dropdown.Item>
            <Dropdown.Item href={outlook({ ...event, start: moment(startDate).format(), end: moment(endDate).format() }).replace("&rru=addevent", "")} target='_blank'
                rel='noopener nofollow'>Outlook.com</Dropdown.Item>
            <Dropdown.Item href={ics({ ...event, start: moment(startDate).format(), end: moment(endDate).format() })}>Others</Dropdown.Item>
        </Dropdown.Menu >

    )
}

export default AddToCalendar
