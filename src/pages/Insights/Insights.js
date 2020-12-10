import React from 'react';
import { Col, Container, Row, Jumbotron, Card } from 'react-bootstrap';
import { jobs as JobsData } from './jobs';
import './Insights.css';

const ShowJobCards = (jobs) => {
	let rows = [];
	for (let i = 0; i < Math.ceil(jobs.length / 3); i++) {
		let cards = [];
		let temp = jobs.slice(i*3, i*3+3);
		for (let j = 0; j < temp.length; j++) {
			cards.push(<Col xs={12} md={4}><JobCard key={j} job={jobs[i*3+j]} /></Col>);
		}
		rows.push(<Row key={i}>{cards}</Row>);
	}
	return rows;
}

const Insights = () => {
	const [searchInput, setSearchInput] = React.useState('');
	const [jobs, setJobs] = React.useState(JobsData);

	const updateSearchInput = (event) => {
		setSearchInput(event.currentTarget.value);
	};

	const handleSearch = (event) => {
		if (!searchInput) {
			setJobs(JobsData);
		} else {
			setJobs(JobsData.filter(job => job.company.name === searchInput 
					|| job.title === searchInput 
					|| job.description === searchInput));
		}
	};

	/** Need some state to fetch and populate a list of jobs */
	return (
		<Container fluid className="main">
			<Jumbotron fluid className="hero">
				<h1>Cougar Insights</h1>
			</Jumbotron>
			<Container className="secondary container">
				<Container className="search-content">
					<div className="search">
						<div className="search-input">
							<input value={searchInput} onChange={updateSearchInput} />
							<button onClick={handleSearch}>
								Search
							</button>
						</div>
						<h6>
							{jobs.length} jobs found
						</h6>
					</div>
				</Container>
				<Container className="job-content">
					{
						ShowJobCards(jobs)
					}
				</Container>
			</Container>
		</Container>
	);
}
export default Insights;

const JobCard = ({ job }) => {
	const { company, title, description } = job;

	return <Card className="job-card">
		<Card.Body>
			<Card.Title>
				<div>

				</div>
				<div>
					{company.name}
				</div>
			</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">
				{title}
			</Card.Subtitle>
			<Card.Text>
				{description}
			</Card.Text>
			<Card.Link href="#"></Card.Link>
		</Card.Body>

	</Card>
}