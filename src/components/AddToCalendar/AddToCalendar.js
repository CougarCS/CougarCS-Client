import React from 'react'
import { Dropdown } from 'react-bootstrap';
import moment from 'moment';

const AddToCalendar = ({ event }) => {
    const { title, startDate, endDate, description } = event;

    const formatTime = (date) => {
        return moment.utc(date).format("YYYYMMDDTHHmmssZ");
    }

    const randomKey = () => {
        const n = Math.floor(Math.random() * 999999999999).toString();
        return new Date().getTime().toString() + "_" + n;
    }

    let googleURI = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${formatTime(startDate)}/${formatTime(endDate)}}&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}`;


    let outlookURI = `https://outlook.live.com/owa/?rru=addevent&startdt=${formatTime(startDate)}&enddt=${formatTime(endDate)}&subject=${encodeURIComponent(title)}&body=${description}&allday=false&uid=${randomKey()}&path=/calendar/view/Month`

    return (

        <Dropdown.Menu >
            <Dropdown.Item href={googleURI} target='_blank'
                rel='noopener nofollow'>Google</Dropdown.Item>
            <Dropdown.Item href={outlookURI} target='_blank'
                rel='noopener nofollow'>Outlook.com</Dropdown.Item>
        </Dropdown.Menu >
    )
}

export default AddToCalendar
