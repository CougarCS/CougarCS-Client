import React from 'react';
import { Col, Image, Nav, Row } from 'react-bootstrap';
import './Officer.css';
const APPLICATION_LINK = 'https://forms.gle/wFiokVCgfc8Wqp1S7';

const Officer = ({ officer }) => {
	return (
		<>
			<Row>
				<Col>
					<div className='officers'>
						<div className='picture'>
							<Image src={officer.image} roundedCircle />
						</div>
						<div className='team-content'>
							<h5 className='name'>
								{officer.open ? (
									<Nav.Link
										href={APPLICATION_LINK}
										target='_blank'
										rel="nofollow noopener">
										Apply Here
									</Nav.Link>
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
										<a href={`mailto:${officer.email}`}>
											<i className='far fa-envelope fa'></i>
										</a>
									</li>
								)}
								{officer.linkedin.length > 0 && (
									<li>
										<Nav.Link
											href={officer.linkedin}
											target='_blank'
											rel='noopener nofollow'>
											<i className='fab fa-linkedin'></i>
										</Nav.Link>
									</li>
								)}
							</ul>
						) : null}
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Officer;
