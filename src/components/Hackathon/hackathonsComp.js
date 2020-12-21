import React from 'react';
import { Col, Row, Button, Card} from 'react-bootstrap';
import './hackathons.css';

const HackathonsList = ({ hackathonlist }) => {
    return (
                <Card className="d-flex">
                    <div className="embed-responsive embed-responsive-16by9">
                        <Card.Img variant="top" className="embed-responsive-item" src={hackathonlist.img}/>
                    </div>
                    
                    <div className="card-body">
                        <div className="d-flex mb-2 justify-content-left">

                            <div className="card-title mb-0 font-weight-bold">
                                {hackathonlist.title}
                            </div>

                        </div>
                        <p className="card-text text-secondary">
                            {hackathonlist.description}
                        </p>
                        <div className="display-inline-block text-left">
                       
                            <div>
                                <Button  variant="danger" href={hackathonlist.link} target="_blank">
                                    Apply Here
                                </Button>
                            </div>
                    
                        </div>
                        <div className="dates">
                            <div className="start-end">
                                <span className="italicize">Date: </span>{hackathonlist.startDate.replace("-", "/")}-{hackathonlist.endDate.replace("-", "/")}
                            </div>
                            <div className="deadline">
                                <span style={{fontStyle: "italic", fontWeight: 600}}>Apply Deadline: </span>{hackathonlist.deadline}
                            </div>
                        </div>
                    </div>
                    
                </Card>
    );
}
export default HackathonsList;