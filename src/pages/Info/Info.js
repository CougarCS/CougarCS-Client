import React from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import infoPDF from '../../assets/info.pdf';
import './Info.css';

const meta = {
	title: 'Info',
	desc: 'CougarCS Information Packet',
	url: 'https://cougarcs.com/info',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const Info = () => {
	return (
		<div className='hold'>
			<MetaData {...meta} />
			<iframe src={infoPDF} title='title' className='csPDF' />
		</div>
	);
};

export default Info;
