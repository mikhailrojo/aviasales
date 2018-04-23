import React, {Component} from 'react';
import {injectGlobal, default as styled} from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Filters, OfferList, Logo} from '../../components';
import * as actions from '../../actions'

/**
 * Инжектим основные глобальные стили
 */
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

/**
 * Общие стили верстки приложения
 */
const Layout = styled.div`
	text-align: center;
`;

/**
 * Тело приложения
 */
const Body = styled.div`
	display: flex;
	margin-top: 20px;
`;

/**
 * Мапит стайте к пропсам
 */
const mapStateToProps = ({visibleOffers, chosenStops, selectedCurrency, currencyRates}) => ({
	offers: visibleOffers,
	chosenStops,
	selectedCurrency,
	currencyRates
});

/**
 * Мапит диспатч к пропсам
 */
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

/**
 * Основной компонент приложения
 */
class AppContainer extends Component {
	/**
	 * Адрес получения предложений по билетам
	 * @type {string}
	 */
	apiUrl = 'api/getOffers';

	componentDidMount() {
		this.props.fetchOffers(this.apiUrl);
	}

	render() {
		const {
			offers,
			filterByStops,
			chosenStops,
			selectedCurrency,
			changeCurrency,
			currencyRates
		} = this.props;

		return (
			<Layout>
				<Logo />
				<Body>
				<Filters
					filterByStops={filterByStops}
					chosenStops={chosenStops}
					changeCurrency={changeCurrency}
					selectedCurrency={selectedCurrency}
					currencyRates={currencyRates}
				/>
				<OfferList offers={offers} currency={selectedCurrency}/>
				</Body>
			</Layout>
		);
	}
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
