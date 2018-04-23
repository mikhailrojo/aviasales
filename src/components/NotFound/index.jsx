import * as React from 'react';
import styled from 'styled-components';

import sadFace from './assets/sad-face.svg';

/**
 * Блок иконки с грусными лицом
 */
const SadFaceIcon = styled.div`
	display: inline-block;
	height: 50px;
	margin-top: 15px;
	width: 50px;
	background: url(${sadFace});
`;

/**
 * Блок с информацией о том что ничего не найдено
 * @constructor
 */
const NotFound = () => (
	<div>
		<SadFaceIcon/>
		<p>К сожалению ничего не было найдено</p>
	</div>
);

export {NotFound};
