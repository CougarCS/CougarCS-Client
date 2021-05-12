import React from 'react';
import { Nav } from 'react-bootstrap';

export const Socials = ({ href, children }) => {
	return (
		<Nav.Link href={href} target='_blank' rel='noopener nofollow'>
			{children}
		</Nav.Link>
	);
};
