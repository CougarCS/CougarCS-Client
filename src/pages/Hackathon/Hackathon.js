import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import hackathons from '../../hackathons';
import HackathonComp from '../../components/Hackathon/hackathonsComp';
import cron from "node-cron"
import shell from "shelljs"
import './Hackathon.css';

const Hackathon = () => {
    const currTime = useState(new Date().toISOString().split("T")[0]);
    /* cron.schedule("30 54 23 * * *", () => { ``` implementation doesn't work on client side ```
        console.log("fetching latest hackathons...")
        if(shell.exec("cd src/ && npx web_scraper_cougarcs").code !== 0){
            console.log("Failed to fetch latest hackathons. Will attempt to fetch at midnight, everyday.")
        }
    }); */
    return (
        <Container className="hackathonCard" fluid>
            <h2>Upcoming Hackthons</h2>
            <div className="hackathonLogos">
                {
                hackathons.sort((a, b) => (a.startDate > b.startDate) ? 1:-1).map((hackathonlist) =>
                    (hackathonlist.endDate > currTime) ? (
                        <HackathonComp hackathonlist = {hackathonlist} key = {hackathonlist.id}/> 
                    ) : null     
                )
                }
            </div>
            <h2>Past Hackathons</h2>
            <div className="hackathonLogos past">
                {
                hackathons.sort((a, b) => (a.startDate <b.startDate) ? 1:-1).map((hackathonlist) =>
                    (hackathonlist.endDate < currTime) ? (
                        <HackathonComp hackathonlist = {hackathonlist} key = {hackathonlist.id}/> 
                    ) : null
                )
                }
            </div>
        </Container>
    )
}

export default Hackathon;