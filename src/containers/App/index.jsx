import React, {Component} from 'react';
import {injectGlobal, default as styled} from 'styled-components';

import {Offer, Filters, OfferList} from '../../components';


injectGlobal`
	body {
		margin: 0;
		padding: 0;
		background-color: #F1F5F9;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Open Sans', Tahoma, san-serif;
	}
`;

const Body = styled.div`
	display: flex;
`;

/**
 * Основной компонент приложения
 */
export class App extends Component {
	/**
	 * Адрес получения предложений по билетам
	 * @type {string}
	 */
	apiUrl = '/api/getOffers';

	state = {
		offers: null
	};

	componentDidMount() {
		this.callApi()
			.then(offers => this.setState({offers}))
			.catch(error => console.log(error));
	}

	callApi = async () => {
		const response = await fetch(this.apiUrl);
		const body = await response.json();

		if (response.status !== 200) {
			// @todo показывать ошибку
			throw new Error('not uploaded');
		}
		return body;
	};

	render() {
		const {offers} = this.state;

		return (
			<div>
				<Body>
					<Filters />
					<OfferList offers={offers} />
				</Body>
			</div>
		);
	}
}
