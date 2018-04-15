import ActionTypes from '../constants';

export const reducer = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.SHOW_ERROR: {
			return state;
		}
		case ActionTypes.SHOW_OFFERS: {
			return {...state, offers: action.payload};
		}
		default: {
			return state;
		}
	}
};
