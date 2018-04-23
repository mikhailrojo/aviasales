import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {OfferList} from '../index';

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
	it('render OfferList with no offers', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<OfferList
				currency='RUB'
			/>
		);
		expect(component).toMatchSnapshot();
	});
	it('render OfferList with empty offers', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<OfferList
				offers={[]}
				currency='RUB'
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('render OfferList with 1 offer', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<OfferList
				offers={[TEST_OFFER]}
				currency='RUB'
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
