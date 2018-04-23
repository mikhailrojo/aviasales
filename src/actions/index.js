import {
	ActionTypes,
	RUB_TO_RUB_EXCHANGE_RATE,
	EXCHANGE_RATE_URL
} from '../constants';

/**
 * Пока не используется
 */
const showError = () => ({
	type: ActionTypes.SHOW_ERROR
});

/**
 * Меняет выбранную валюту предложений авиабилетов
 * @param {String} chosenCurrency
 */
export const changeCurrency = chosenCurrency => ({
	type: ActionTypes.CHANGE_CURRENCY,
	payload: chosenCurrency
});

/**
 * Показывает предложения по перелетам
 * @param {Object[]} offers
 */
const showOffers = offers => ({
	type: ActionTypes.SHOW_OFFERS,
	payload: offers
});

/**
 * Устанавливает в стор текущие курсы валют
 * @param {Object} currencies
 */
const setCurrencyRates = currencies => ({
	type: ActionTypes.SET_CURRENCY_RATE,
	payload: currencies
});

/**
 * Делает запрос к API c текущим курсом валют
 * @returns {Thunk}
 */
const fetchExchangeRates = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(EXCHANGE_RATE_URL);

			const {Valute: currencies = {}} = await response.json();
			const {USD, EUR} = currencies;

			dispatch(setCurrencyRates({
				USD: USD.Value,
				EUR: EUR.Value,
				RUB: RUB_TO_RUB_EXCHANGE_RATE
			}));
		} catch (e) {
			/**
			 * В данном случае ничего не делаю,
			 * так как если валюты не загрузяться - то
			 * фильтр по валютам не отренедерится
			 */
		}
	};
};

/**
 * Делает асинхронный запрос на получение предложений
 * @param {String} apiUrl адрес для запроса
 * @returns {Thunk}
 */
export const fetchOffers = apiUrl => async (dispatch) => {
	const response = await fetch(apiUrl);

	if (response.status !== 200) {
		dispatch(showError());
	}

	const body = await response.json();

	dispatch(showOffers(body));
	dispatch(fetchExchangeRates());
};

/**
 * Фильтрует предложения по количеству пересадо
 * @param stops
 * @returns {{type: String, payload: String}}
 */
export const filterByStops = stops => ({
	type: ActionTypes.FILTER_STOPS,
	payload: stops
});
