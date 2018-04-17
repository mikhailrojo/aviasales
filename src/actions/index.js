import ActionTypes from '../constants';

/**
 * Пока не используется
 */
const showError = () => ({
	type: ActionTypes.SHOW_ERROR
});

/**
 *  Показывает предложения по перелетам
 * @param offers
 */
const showOffers = (offers) => ({
	type: ActionTypes.SHOW_OFFERS,
	payload: offers
});

/**
 * Делает асинхронный запрос на получение предложений
 * @param {String} apiUrl адрес для запроса
 * @returns {Thunk}
 */
export const fetchOffers = (apiUrl) => {
	return async (dispatch) => {
		const response = await fetch(apiUrl);

		if (response.status !== 200) {
			dispatch(showError());
		}

		const body = await response.json();

		dispatch(showOffers(body))
	}
};

/**
 * Фильтрует предложения по количеству пересадо
 * @param stops
 * @returns {{type: string, payload: *}}
 */
export const filterByStops = (stops) => {
	return {
		type: ActionTypes.FILTER_STOPS,
		payload: stops
	}
};