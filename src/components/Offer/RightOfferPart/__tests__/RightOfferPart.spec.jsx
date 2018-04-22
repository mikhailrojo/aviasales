import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {RightOfferPart} from '../index';

const TEST_OFFER = {
	arrival_date: "12.05.18",
	arrival_time: "22:10",
	carrier: "TK",
	departure_date: "12.05.18",
	departure_time: "16:20",
	destination: "TLV",
	destination_name: "Тель-Авив",
	origin: "VVO",
	origin_name: "Владивосток",
	price: 12400,
	stops: 3,
};

describe('Snapshot', () => {
	it('render RightOfferPart with 1 offer', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<RightOfferPart
				{...TEST_OFFER}
			/>
		);
		expect(component).toMatchSnapshot();
	});
});