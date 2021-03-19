import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './hackathons.css';

const HackathonsList = ({ hackathonlist }) => {
    return (
                <Card className="d-flex">
                    <div className="embed-responsive embed-responsive-16by9">
                        <Card.Img variant="top" className="embed-responsive-item" src={hackathonlist.img}/>
                    </div>
                    
                    <div className="card-body">
                        <div className="card-title">
                            {hackathonlist.title}
                        </div>
                        <Button  variant="danger" href={hackathonlist.link} target="_blank">Apply Here</Button>

                        <div className="dates">
                            <div className="start-end">
                                <span className="italicize">Date: </span>{hackathonlist.startDate.replace("-", "/").substr(5)}-{hackathonlist.endDate.replace("-", "/").substr(5)}
                            </div>
                        </div>
                    </div>
                    
                </Card>
    );
}
export default HackathonsList;