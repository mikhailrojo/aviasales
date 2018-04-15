import ActionTypes from '../constants';

const showError = () => ({
	type: ActionTypes.SHOW_ERROR
});

const showOffers = (offers) => ({
	type: ActionTypes.SHOW_OFFERS,
	payload: offers
});

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