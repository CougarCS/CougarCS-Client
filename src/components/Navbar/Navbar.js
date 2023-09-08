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
					<ActiveListItem url='/calendar' name='Events' />
					<ActiveListItem url='/gallery' name='Gallery' />
					<ActiveListItem url='/tutoring' name='Tutoring' />
					<ActiveListItem url='/membership' name='Membership' />
					<ActiveListItem url='/hackathons' name='Hackathons' />
					<ActiveListItem url='/contactus' name='Contact Us' />
					<Nav.Link href='https://uhcode.red/' target='_blank' rel='noreferrer'>
						CodeRED <i className='fas fa-external-link-alt'></i>
					</Nav.Link>
					<LinkContainer to='/register'>
						<Nav.Link>
							<button className='button'>Register</button>
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
