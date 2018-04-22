import * as React from 'react';
import styled from 'styled-components'

import {Offer, Spinner, NotFound} from '..';

/**
 * Стилезованная компонента Списка предложений
 */
const StyledOfferList = styled.div`
	margin: 0 0 20px 20px;
	text-align: center;
	width: 566px;
`;

/**
 * Компонент для оборажения либо списка предложений
 * либо ошибок, либо лоудер
 * @param {Object[]} offers списки предложений перелетов
 * @returns {JSX}
 * @constructor
 */
const OfferList = ({offers, currency}) => {
	const offersInfo = !offers
		? <Spinner />
		: !offers.length
			? <NotFound />
			: offers.map((detail, index) => <Offer {...detail} key={index}  currency={currency} />);

	return (
		<StyledOfferList>
			{offersInfo}
		</StyledOfferList>
	);
};

export {OfferList};
