import * as React from 'react';
import styled from 'styled-components';

import iconUrls from './assets/';

/**
 * Стилированная левая часть предложения о перевозке
 */
const StyledLeftOfferPart = styled.div`
	align-items: center;
	border-right: 1px solid rgb(231,235,237);
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 200px;
`;

/**
 * Кнопка покупки с ценой
 */
const BuyButton = styled.button`
	border-radius: 5px;
	background-color: #d64d08;
	border: 0;
	color: #fff;
	font-size: 14px;
	font-weight: 100;
	height: 57px;
	line-height: 17px;
	margin-top: 20px
	outline: none;
	transition: all 0.3s;
	width: 160px;

	&:hover {
		background-color: #faa760;
	}
`;

/**
 * Логотип перевозчика
 */
const Logo = styled.div`
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url(${props => props.url});
	height: 54px;
	width: 160px;
`;

const CURRENCY_MAP = {
	RUB: '\u20BD',
	USD: '\u0024',
	EUR: '\u20AC'
};

/**
 * Левая часть предложения о перевозки
 * с логотипом перевозчика и ценой билета
 * @param price {Number} цена
 * @param carrier {String} аббревиатура перевозчика
 * @param currency {'USD'|'EUR'|'RUB'} выбранная валюта
 * @returns {JSX}
 * @constructor
 */
const LeftOfferPart = ({price, carrier, currency}) => {
	return (
		<StyledLeftOfferPart >
			<Logo url={iconUrls[carrier]} />
			<BuyButton>
				<div>
					Купить
				</div>
				<div>
					{`за ${price} ${CURRENCY_MAP[currency]}`}
				</div>
			</BuyButton>
		</StyledLeftOfferPart>
	);
};


export {LeftOfferPart};