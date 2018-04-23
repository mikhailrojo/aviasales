import {createStore, applyMiddleware} from 'redux';
import {reducer} from '../reducer';
import ReduxThunk from 'redux-thunk';

/**
 * Гланый стор приложения с Thunk middleware
 * @type {Store<S>}
 */
const store = createStore(
	reducer,
	applyMiddleware(ReduxThunk)
);

export {store};
