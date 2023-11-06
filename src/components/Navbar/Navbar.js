import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/logo.png';
import './Navbar.css';

function ActiveListItem(props) {
	// active={false} prevents a link from staying active when on the main page
	return (
		<LinkContainer to={props.url}>
			<Nav.Link active={false}>{props.name}</Nav.Link>
		</LinkContainer>
	);
}

const NavBar = () => {
	return (
		<Navbar className='main-nav' fluid='true' collapseOnSelect expand='lg'>
			<LinkContainer to='/'>
				<Navbar.Brand>
					<img src={logo} className='App-logo' alt='logo' />
				</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls='responsive-navbar-nav'>
				{' '}
				<i className='fas fa-bars fa-lg'></i>
			</Navbar.Toggle>
			<Navbar.Collapse
				className='justify-content-end'
				id='responsive-navbar-nav'
			>
				<Nav>
					<ActiveListItem url='/about' name='About' />
					<ActiveListItem url='/events' name='Events' />
					<ActiveListItem url='/gallery' name='Gallery' />
					<ActiveListItem url='/tutoring' name='Tutoring' />
					<ActiveListItem url='/webdev' name='WebDev' />
					{/* when hackathon will return to active it again no need to delete */}
					{/* <ActiveListItem url='/hackathons' name='Hackathons' /> */}
					<ActiveListItem url='/infosec' name='InfoSec' />
					<ActiveListItem url='/contactus' name='Contact Us' />

					<Nav.Link href='https://uhcode.red/' target='_blank' rel='noreferrer'>
						CodeRED <i className='fas fa-external-link-alt'></i>
					</Nav.Link>
					<LinkContainer to='/join'>
						<Nav.Link>
							<button className='button'>Join Us</button>
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
