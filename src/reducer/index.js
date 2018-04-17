import ActionTypes from '../constants';

/**
 * Главный редьюсер
 * @param {Object} state стейт приложений
 * @param {Object} action экшен
 * @returns {Object} возвращает новый стейт
 */
export const reducer = (state = {}, action) => {
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

			const {value, checked, onlyThisOption} = action.payload;
			const {allOffers, chosenStops = []} = state;

			if (onlyThisOption && value !== 'all') {
				chosenStops.fill(false);
				chosenStops[value] = true;
				const visibleOffers = allOffers.filter(offer => chosenStops[offer.stops]);

				return {...state, chosenStops: [...chosenStops], visibleOffers};
			}

			if (value === 'all') {
				chosenStops.fill(checked);

				return {...state, chosenStops: [...chosenStops], visibleOffers: checked ? allOffers : []}
			}
			chosenStops[value] = checked;
			const visibleOffers = allOffers.filter(offer => chosenStops[offer.stops]);

			return {...state, chosenStops: [...chosenStops], visibleOffers};
		}
		default: {
			return state;
		}
	}
};
