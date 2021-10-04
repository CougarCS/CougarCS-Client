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
			<object data={infoPDF} type='application/pdf' className='csPDF'>
				<a href={infoPDF} target='_blank' rel='noreferrer'>
					Download CougarCS Info Packet
				</a>
			</object>
		</div>
	);
};

export default Info;
