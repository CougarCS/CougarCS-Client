import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Hackathons.css';

const HackathonsList = ({ hackathonlist, isPast }) => {
	return (
		<Card className='d-flex'>
			<div className='embed-responsive embed-responsive-16by9'>
				<Card.Img
					variant='top'
					className='embed-responsive-item'
					src={hackathonlist.img}
					alt={hackathonlist.title}
				/>
			</div>

			<div className='card-body'>
				<div className='card-title'>{hackathonlist.title}</div>

				<p className='card-text text-secondary'>{hackathonlist.description}</p>

				<div className='applyBtn'>
					{!isPast && (
						<Button
							href={hackathonlist.link}
							target='_blank'
							size='sm'
							rel='noreferrer'
						>
							Apply Here
						</Button>
					)}
				</div>

				<div className='dates'>
					<div className='start-end'>
						<span className='italicize'>Date: </span>
						{hackathonlist.startDate.replace('-', '/')}-
						{hackathonlist.endDate.replace('-', '/')}
					</div>
					<div className='deadline'>
						<span style={{ fontStyle: 'italic', fontWeight: 600 }}>
							Apply Deadline:{' '}
						</span>
						{hackathonlist.deadline}
					</div>
				</div>
			</div>
		</Card>
	);
};
export default HackathonsList;
