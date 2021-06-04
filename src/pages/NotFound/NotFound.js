import React from 'react';
import { Link } from 'react-router-dom';
import { MetaData } from '../../components/Meta/MetaData';
import './NotFound.css';

const meta = {
	title: '404',
	desc: 'The page your looking for is not here.',
	url: 'https://cougarcs.com/404',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const NotFound = () => (
	<div>
		<MetaData {...meta}>
			<meta name='prerender-status-code' content='404'></meta>
		</MetaData>

		<div className='fourOfour'>
			<h1>
				4<i className='fa fa-cog fa-spin' />4
			</h1>
		</div>
		<div className='return'>
			<p>Page Not Found</p>
			<button>
				<Link to='/'>Return Home</Link>
			</button>
		</div>
	</div>
);

export default NotFound;
