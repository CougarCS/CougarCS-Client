import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './hackathons.css';

const HackathonsList = ({ hackathonlist }) => {
    return (
        <Card className="d-flex">
            <div className="embed-responsive embed-responsive-16by9">
                <Card.Img variant="top" className="embed-responsive-item" src={hackathonlist.img} />
            </div>

            <div className="card-body">
                <div className="card-title">
                    {hackathonlist.title}
                </div>

                <p className="card-text text-secondary">
                    {hackathonlist.description}
                </p>

                <Button variant="danger" href={hackathonlist.link} target="_blank">Apply Here</Button>

                <div className="dates">
                    <div className="start-end">
                        <span className="italicize">Date: </span>{hackathonlist.startDate.replace("-", "/")}-{hackathonlist.endDate.replace("-", "/")}
                    </div>
                    <div className="deadline">
                        <span style={{ fontStyle: "italic", fontWeight: 600 }}>Apply Deadline: </span>{hackathonlist.deadline}
                    </div>
                </div>
            </div>

        </Card>
    );
};
export default HackathonsList;