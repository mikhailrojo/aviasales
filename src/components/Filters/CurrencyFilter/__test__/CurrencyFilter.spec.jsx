import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {CurrencyFilter} from '../index';

describe('Snapshot', () => {
	it('render CurrencyFilter with selected RUB', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<CurrencyFilter
				changeCurrency={jest.fn()}
				selectedCurrency="RUB"
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
