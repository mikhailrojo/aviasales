import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {LeftOfferPart} from '../index';

describe('Snapshot', () => {
	it('render LeftOfferPart with the offer price, currency and carrier', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<LeftOfferPart
				price={12000}
				carrier="SU"
				currency="RUB"
			/>
		);
		expect(component).toMatchSnapshot();
	});
});