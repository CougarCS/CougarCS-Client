import React from 'react';
import { Col, Container, Row, Jumbotron, Button, Card } from 'react-bootstrap';
import gif from '../../assets/about.svg';
import './Insights.css';

const Insights = () => {

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
						<div className="jobs">
							<Row>
								<Col>
									<Card className="job-card">
										Hello
									</Card>
								</Col>
								<Col>
									<Card className="job-card">
										Hello
									</Card>
								</Col>
								<Col>
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