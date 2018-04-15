import * as React from 'react';
import styled from 'styled-components'

import {Offer} from '..';

const StyledOfferList = styled.div`
	margin: 0 0 20px 20px;
	width: 566px;
`;
const OfferList = ({offers}) => (
	<StyledOfferList>
		{offers ? offers.map((detail, index) => <Offer {...detail} key={index} />) : 'Данные грузятся'}
	</StyledOfferList>
);

export {OfferList};
