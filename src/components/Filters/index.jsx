import * as React from 'react';
import styled from 'styled-components';

import {StopFilter} from './StopFilter';

const StyledFilters = styled.div`
	width: 232px;
	height: 331px;
	background: #fff;
	border-radius: 5px;
	grid-area: filters;
	box-shadow: 0px 0px 10px 0px rgba(160,205,237,0.2);
`;

const Filters = () => (
	<StyledFilters>
		<StopFilter />
	</StyledFilters>
);

export {Filters};