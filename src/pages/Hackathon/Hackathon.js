import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hackathons from '../../hackathonlists';
import HackathonComp from '../../components/Hackathon/hackathonsComp';
import './Hackathon.css';

class Hackathon extends React.Component {
    state={
        currTime : new Date().toISOString().split("T")[0],
    }
    render(){
        return(
            <Container className="hackathonCard" fluid>
                <h1>Upcoming Hackthons</h1>
                    <Row className="each">
                        <div className="hackathonLogos">
                            {
                                hackathons.sort((a, b) => (a.year.concat(a.startDate) > b.year.concat(b.startDate)) ? 1:-1).map((hackathonlist) =>
                                    (hackathonlist.year.concat(hackathonlist.endDate) > this.state.currTime) ? (
                                            <HackathonComp hackathonlist = {hackathonlist} key = {hackathonlist.id}/> 
                                    ) : null
                            )}
                        </div>
                    </Row>
            </Container>
        )
    }
}
export default Hackathon;