import React from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import infoPDF from '../../assets/info.pdf';

const meta = {
	title: 'Info',
	desc: 'CougarCS Information Packet',
	url: 'https://cougarcs.com/info',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const Info = () => {
	return (
		<div>
			<MetaData {...meta} />
			<iframe src={infoPDF} title='csPDF' width='100%' height='700px' />
		</div>
	);
};

export default Info;
