import React, {Component} from 'react';
import {injectGlobal} from 'styled-components';

import {Offer} from '../../components';

injectGlobal`
	body {
		margin: 0;
		padding: 0;
		background-color: #F1F5F9;
	}
	body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
`;


export class App extends Component {
	render() {
		return (
			<Offer />
		);
	}
}
