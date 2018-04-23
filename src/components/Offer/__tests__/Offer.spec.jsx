import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {Offer} from '../index';

const TEST_OFFER = {
	arrival_date: '12.05.18',
	arrival_time: '22:10',
	carrier: 'TK',
	departure_date: '12.05.18',
	departure_time: '16:20',
	destination: 'TLV',
	destination_name: 'Тель-Авив',
	origin: 'VVO',
	origin_name: 'Владивосток',
	price: 12400,
	stops: 3
};

describe('Snapshot', () => {
	it('render Offer with offer details', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<Offer
				{...TEST_OFFER}
				currency='RUB'
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
