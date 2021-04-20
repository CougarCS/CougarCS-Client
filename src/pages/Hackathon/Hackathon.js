import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import hackathons from '../../hackathonList';
import HackathonComp from '../../components/Hackathon/HackathonsComp';
import './Hackathon.css';
import { Helmet } from 'react-helmet';

const Hackathon = () => {

    const [currTime, updateCurrTime] = useState(new Date().toISOString().split("T")[0]);

    const sortedHackathon = hackathons
        .sort((a, b) => (a.year.concat(a.startDate) > b.year.concat(b.startDate)) ? 1 : -1);

    const [upcoming, setUpcomming] = useState(
        sortedHackathon
            .filter((hackathonlist) => (hackathonlist.year.concat(hackathonlist.endDate) > currTime))
            .map(hackathonlist => <HackathonComp hackathonlist={hackathonlist} key={hackathonlist.id} />)
    );

    const [pastHackathon, setPast] = useState(
        sortedHackathon
            .filter((hackathonlist) => (hackathonlist.year.concat(hackathonlist.endDate) < currTime))
            .map(hackathonlist => <HackathonComp hackathonlist={hackathonlist} key={hackathonlist.id} />)
            .reverse()
    );


    return (
        <Container className="hackathonCard" fluid>
            <Helmet>
                <title>Hackathon</title>
            </Helmet>
            <h2>Upcoming Hackthons</h2>
            <div className="hackathonLogos">
                {
                    upcoming.length ? upcoming : <h3 className="no-upcoming">No Upcoming Hackathon...</h3>
                }
            </div>
            <h2>Past Hackathons</h2>
            <div className="hackathonLogos past">
                {
                    pastHackathon.length ? pastHackathon : <h3 className="no-upcoming">No Past Hackathon...</h3>
                }
            </div>
        </Container>
    );
};

export default Hackathon;