import {ActionTypes} from '../constants';
import {
	getCurrentVisibleOffers,
	getChosenStops
} from './helpers';

/**
 * Первоначальный объект состояния
 * @type {{selectedCurrency: string, chosenStops: Boolean[]}}
 */
const initialState = {
	/**
	 * Первоначальные цены получаем в рублях
	 * поэтому можно зафиксировать первоначально-выбранную валюту
	 */
	selectedCurrency: 'RUB',
	/**
	 * Массив с состояниями чекбоксов по кол-ву перелетов
	 * @todo сделать побитовой маской?
	 * круто было бы сделать динамической
	 */
	chosenStops: [true, true, true, true, true]
};

/**
 * Главный редьюсер
 * @param {Object} state стейт приложений
 * @param {Object} action экшен
 * @returns {Object} возвращает новый стейт
 */
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SHOW_ERROR: {
			return state;
		}
		case ActionTypes.SHOW_OFFERS: {
			const {chosenStops = []} = state;
			const allOffers = action.payload;
			if (!chosenStops.length) {
				chosenStops[0] = false;
				allOffers.forEach(offer => {
					chosenStops[offer.stops + 1] = false;
				});
			}

			return {
				...state,
				allOffers: allOffers,
				visibleOffers: allOffers,
				chosenStops: [...chosenStops]
			};
		}
		case ActionTypes.FILTER_STOPS: {
			const {allOffers, chosenStops: oldChosenStops, currencyRates = {}, selectedCurrency} = state;
			const chosenStops = getChosenStops(oldChosenStops, action.payload);
			const exchangeRate = currencyRates[selectedCurrency];
			const visibleOffers = getCurrentVisibleOffers(allOffers, chosenStops, exchangeRate);

			return {...state, chosenStops: [...chosenStops], visibleOffers};
		}
		case ActionTypes.CHANGE_CURRENCY: {
			const selectedCurrency = action.payload;
			const {currencyRates, chosenStops, allOffers} = state;
			const selectedCurrencyRate = currencyRates[selectedCurrency];

			const visibleOffers = getCurrentVisibleOffers(allOffers, chosenStops, selectedCurrencyRate);

			return {...state, selectedCurrency, visibleOffers};
		}
		case ActionTypes.SET_CURRENCY_RATE: {
			return {...state, currencyRates: action.payload};
		}
		default: {
			return state;
		}
	}
};
