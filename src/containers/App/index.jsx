import React, {Component} from 'react';
import {injectGlobal} from 'styled-components';

import {Offer} from '../../components';

injectGlobal`
	body {
		margin: 0;
		padding: 0;
		background-color: #F1F5F9;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		font-family: 'Open Sans', Tahoma, san-serif;
		font-weight: lighter;
	}
`;

const offerDetails = [
	{
		origin: 'VVO',
		origin_name: 'Владивосток',
		destination: 'TLV',
		destination_name: 'Тель-Авив',
		departure_date: '12.05.18',
		departure_time: '16:20',
		arrival_date: '12.05.18',
		arrival_time: '22:10',
		carrier: 'TK',
		stops: 3,
		price: 12400
	},
	{
		origin: 'VVO',
		origin_name: 'Владивосток',
		destination: 'TLV',
		destination_name: 'Тель-Авив',
		departure_date: '12.05.18',
		departure_time: '17:00',
		arrival_date: '12.05.18',
		arrival_time: '23:30',
		carrier: 'TK',
		stops: 2,
		price: 11000
	}
];

/**
 * Основной компонент приложения
 */
export class App extends Component {
	render() {
		return (
			<div>
				{offerDetails.map((detail, index) => <Offer {...detail} key={index} />)}
			</div>
		);
	}
}
