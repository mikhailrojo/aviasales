import React, {Component} from 'react';
import {injectGlobal, default as styled} from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Filters, OfferList} from '../../components';
import * as actions from '../../actions'

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

const mapStateToProps = ({visibleOffers, chosenStops, selectedCurrency}) => ({
	offers: visibleOffers,
	chosenStops,
	selectedCurrency
});
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

/**
 * Основной компонент приложения
 */
class AppContainer extends Component {
	/**
	 * Адрес получения предложений по билетам
	 * @type {string}
	 */
	apiUrl = '/api/getOffers';

	componentDidMount() {
		this.props.fetchOffers(this.apiUrl);
	}

	render() {
		const {
			offers,
			filterByStops,
			chosenStops,
			selectedCurrency,
			changeCurrency
		} = this.props;
		console.log(this.props);

		return (
			<Body>
			<Filters
				filter={filterByStops}
				chosenStops={chosenStops}
				changeCurrency={changeCurrency}
				selectedCurrency={selectedCurrency}
			/>
			<OfferList offers={offers}/>
			</Body>
		);
	}
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);