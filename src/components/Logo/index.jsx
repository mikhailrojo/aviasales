import * as React from 'react';
import styled from 'styled-components';

import logoIcon from './assets/logo.svg';

/**
 * Блок Логотипа в верхней части страницы
 */
const StyledLogo = styled.div`
	display: inline-block;
	height: 60px;
	margin: 50px 0;
	width: 60px;
	background: url(${logoIcon});
	background-repeat: no-repeat;
	border-radius: 50%;
	box-shadow: 0 5px 12px 3px #ccc;
`;

/**
 * Блок Логотипа вверху страницы
 * @param {Object} props
 * @constructor
 */
const Logo = props => <StyledLogo {...props} />;

export {Logo};
