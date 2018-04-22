import * as React from 'react';
import styled, {keyframes} from 'styled-components';

import logoIcon from './assets/logo.svg';

/**
 * Блок Логотипа в верхней части страницы
 */
const StyledLogoIcon = styled.div`
	display: inline-block;
	height: 60px;
	margin: 50px 0;
	width: 60px;
	background: url(${logoIcon});
	background-repeat: no-repeat;
	border-radius: 50%;
	box-shadow: 0 5px 12px 3px #ccc;
`;

const Logo = (props) => <StyledLogoIcon {...props} />;

export {Logo};