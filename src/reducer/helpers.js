import {RUB_TO_RUB_EXCHANGE_RATE} from '../constants';

/**
 * Возвращает данные по предложению по перелетам,
 * отфильтрованные по пересадкам и с ценой в выбранной валюте
 * @param allOffers
 * @param chosenStops
 * @param selectedCurrencyRate
 */
const getCurrentVisibleOffers = (allOffers = [], chosenStops, selectedCurrencyRate = RUB_TO_RUB_EXCHANGE_RATE) => {
	const filteredOffers = allOffers.filter(offer => chosenStops[offer.stops]);

	return filteredOffers.map(offer => {
		const convertedPrice = (offer.price /selectedCurrencyRate);
		const price = Number.isInteger(convertedPrice)
			? convertedPrice
			: convertedPrice.toFixed(2);

		return {...offer, price};
	});
};

/**
 * Возвращаем массив с булевыми флагами
 * выбранного кол-ва пересадок
 * @param chosenStops до этого выбранные пересадки
 * @param payload payload экшена с новыми выбранными опциями
 * @returns {Boolean[]}
 */
const getChosenStops = (chosenStops, payload) => {
	const {onlyThisOption, value, checked} = payload;

	if (onlyThisOption && value !== 'all') {
		chosenStops.fill(false);
		chosenStops[value] = true;
	} else if (value === 'all') {
		chosenStops.fill(checked);
	} else {
		chosenStops[value] = checked;
	}
	return [...chosenStops];
};


export {getCurrentVisibleOffers, getChosenStops};