import * as React from 'react';
import styled from 'styled-components';

import {StopFilter} from './StopFilter';
import {CurrencyFilter} from './CurrencyFilter';

/**
 * Стилезованный компонент Фильтров
 */
const StyledFilters = styled.div`
	width: 232px;
	height: 331px;
	background: #fff;
	border-radius: 5px;
	grid-area: filters;
	box-shadow: 0px 0px 10px 0px rgba(160,205,237,0.2);
`;

/**
 * Возвращает все фильтры поиска билетов
 * @param {Function} filter Action creator фильтрации перелетов по количеству остановок
 * @param {Object[]} chosenStops количество перелетов
 * @returns {JSX}
 * @constructor
 */
const Filters = ({filter, chosenStops, changeCurrency, selectedCurrency, currencyRates}) => (
	<StyledFilters>
		{currencyRates && <CurrencyFilter changeCurrency={changeCurrency} selectedCurrency={selectedCurrency} />}
		{chosenStops ? <StopFilter filterByStops={filter} chosenStops={chosenStops}/> : null}
	</StyledFilters>
);

export {Filters};