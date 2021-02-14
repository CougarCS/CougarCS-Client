import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import hackathons from '../../hackathonlists';
import HackathonComp from '../../components/Hackathon/HackathonsComp';
import './Hackathon.css';
import { Helmet } from 'react-helmet';

const Hackathon = () => {

    const [currTime, updateCurrTime] = useState(new Date().toISOString().split("T")[0]);

    return (
        <Container className="hackathonCard" fluid>
            <Helmet>
                <title>CougarCS - Hackathon</title>
            </Helmet>
            <h1 className="long-margin">Upcoming Hackthons</h1>
            <div className="hackathonLogos">
                {
                    hackathons.sort((a, b) => (a.year.concat(a.startDate) > b.year.concat(b.startDate)) ? 1 : -1).map((hackathonlist) =>
                        (hackathonlist.year.concat(hackathonlist.endDate) > currTime) ? (
                            <HackathonComp hackathonlist={hackathonlist} key={hackathonlist.id} />
                        ) : null
                    )
                }
            </div>
            <h1 className="long-margin">Past Hackathons</h1>
            <div className="hackathonLogos past">
                {
                    hackathons.sort((a, b) => (a.year.concat(a.startDate) < b.year.concat(b.startDate)) ? 1 : -1).map((hackathonlist) =>
                        (hackathonlist.year.concat(hackathonlist.endDate) < currTime) ? (
                            <HackathonComp hackathonlist={hackathonlist} key={hackathonlist.id} />
                        ) : null
                    )
                }
            </div>
        </Container>
    );
};

export default Hackathon;