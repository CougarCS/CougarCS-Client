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
			<iframe
				src='https://docs.google.com/viewer?srcid=1_0mtgPeD_4ZIo7I31tNmqiU9Ojd2HgYL&pid=explorer&efh=false&a=v&chrome=false&embedded=true'
				title='CougarCS Info Packet'
				className='csPDF'
			>
				<a href={infoPDF} target='_blank' rel='noreferrer'>
					Download CougarCS Info Packet
				</a>
			</iframe>
		</div>
	);
};

export default Info;
