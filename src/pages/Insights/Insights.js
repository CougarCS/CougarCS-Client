import React from 'react';
import { Col, Container, Row, Jumbotron, Button, Card } from 'react-bootstrap';
import './Insights.css';

const Insights = () => {

	/** Need some state to fetch and populate a list of jobs */
	return (
		<Container fluid className="main">
			<Jumbotron fluid className="hero">
				<h1>Cougar Insights</h1>
			</Jumbotron>
			<Container className="secondary container">
				<Container className="job-content">
					<div className="search">
						<div className="search-input">
							<input />
							<button>
								Search
								</button>
						</div>
						<h6>
							1,352 jobs found
						</h6>
					</div>
				</Container>
				<Container>
					<div className="jobs">
						<Row>
							<Col xs={12} md={4}>
								<JobCard />
							</Col>
							<Col xs={12} md={4}>
								<Card className="job-card">
									Hello
								</Card>
							</Col>
							<Col xs={12} md={4}>
								<Card className="job-card">
									Hello
								</Card>
							</Col>
						</Row>
					</div>
				</Container>
			</Container>
		</Container>
	);
}
export default Insights;

const JobCard = (props) => {
	return <Card className="job-card">
		<Card.Body>
			<Card.Title>
				<div>

				</div>
				<div>
					Apple
				</div>
			</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">
				Software Engineer
			</Card.Subtitle>
			<Card.Text>
				A very concise job description...
			</Card.Text>
			<Card.Link href="#"></Card.Link>
		</Card.Body>
	</Card>
}