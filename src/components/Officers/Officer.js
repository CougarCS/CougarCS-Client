import React from 'react';
import { Image } from 'react-bootstrap';
import './Officer.css';
const APPLICATION_LINK = 'https://forms.gle/wFiokVCgfc8Wqp1S7';

const Officer = ({ officer }) => {
	return (
		<div className='officers'>
			<div className='picture'>
				<Image src={officer.image} roundedCircle alt={officer.name} />
			</div>
			<div className='team-content'>
				<h5 className='name'>
					{officer.open ? (
						<a
							href={APPLICATION_LINK}
							target='_blank'
							rel='nofollow noopener noreferrer'
						>
							Apply Here
						</a>
					) : (
						officer.name
					)}
				</h5>
				<h6 className='title'>{officer.title}</h6>
			</div>
			{!officer.open ? (
				<ul className='social'>
					{officer.email.length > 0 && (
						<li>
							<a
								href={`mailto:${officer.email}`}
								target='_blank'
								rel='nofollow noopener noreferrer'
							>
								<i className='far fa-envelope fa'></i>
							</a>
						</li>
					)}
					{officer.linkedin.length > 0 && (
						<li>
							<a
								href={officer.linkedin}
								target='_blank'
								rel='nofollow noopener noreferrer'
							>
								<i className='fab fa-linkedin'></i>
							</a>
						</li>
					)}
				</ul>
			) : null}
		</div>
	);
};

export default Officer;
