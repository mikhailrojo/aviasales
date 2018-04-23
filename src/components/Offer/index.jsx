import * as React from 'react';
import styled from 'styled-components';

import {LeftOfferPart} from './LeftOfferPart';
import {RightOfferPart} from './RightOfferPart';

/**
 * Стилезованный блок предложения
 */
const StyledOffer = styled.div`
	background: #fff;
	border-radius: 5px;
	box-shadow: 0px 0px 10px 0px rgba(160,205,237,0.2);
	display: flex;
	height: 161px;
	margin-bottom: 20px;
`;

/**
 * Компонент с предложение перевозки с ценой,
 * перевозчиком и деталями полета
 * @param price {Number} цена
 * @param carrier {String} аббревиатура перевозчика
 * @param rest {Object} остальные детали перелета
 * @constructor
 */
const Offer = ({price, carrier, currency, ...rest}) => (
	<StyledOffer>
		<LeftOfferPart price={price} carrier={carrier} currency={currency} />
		<RightOfferPart {...rest} />
	</StyledOffer>
);


export {Offer};
