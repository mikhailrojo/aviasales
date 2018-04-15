import * as React from 'react';
import styled from 'styled-components';

import {LeftOfferPart} from './LeftOfferPart';
import {RightOfferPart} from './RightOfferPart';

const StyledContainer = styled.div`
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgba(160,205,237,0.2);
	display: flex;
	height: 161px;
	margin-bottom: 20px;
	width: 566px;
`;

/**
 * Компонент с предложение перевозки с ценой,
 * перевозчиком и деталями полета
 * @param price {Number} цена
 * @param carrier {String} аббревиатура перевозчика
 * @param rest {Object} остальные детали перелета
 * @constructor
 */
const Offer = ({price, carrier, ...rest}) => (
	<StyledContainer>
		<LeftOfferPart price={price} carrier={carrier} />
		<RightOfferPart {...rest} />
	</StyledContainer>
);


export {Offer};
