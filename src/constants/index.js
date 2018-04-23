/**
 * Экшены приложения
 * @type {{[string]: string}}
 */
const ActionTypes = {
	SHOW_ERROR: 'SHOW_ERROR',
	SHOW_OFFERS: 'SHOW_OFFERS',
	FILTER_STOPS: 'FILTER_STOPS',
	CHANGE_CURRENCY: 'CHANGE_CURRENCY',
	SET_CURRENCY_RATE: 'SET_CURRENCY_RATE'
};

/**
 * Так как цены мы первоначально получаем в рублях,
 * то курс конвертации рубля к рублю = 1
 * @type {number}
 */
const RUB_TO_RUB_EXCHANGE_RATE = 1;


/**
 * Урл для получения данных по курсам валют
 * @type {string}
 */
const EXCHANGE_RATE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

export {
	ActionTypes,
	RUB_TO_RUB_EXCHANGE_RATE,
	EXCHANGE_RATE_URL
};
