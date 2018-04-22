import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {Filters} from '../index';

describe('Snapshot', () => {
	it('render Filters with all options', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<Filters
				filterByStops={jest.fn()}
				chosenStops={[false,false,false,true]}
				changeCurrency={jest.fn()}
				selectedCurrency="RUB"
				currencyRates={{
					RUB: 1,
					EUR: 72,
					USD: 63
				}}
			/>
		);
		expect(component).toMatchSnapshot();
	});
	it('render Filters with no currencyRates', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<Filters
				filterByStops={jest.fn()}
				chosenStops={[false,false,false,true]}
				changeCurrency={jest.fn()}
				selectedCurrency="RUB"
			/>
		);
		expect(component).toMatchSnapshot();
	});
	it('render Filters with no chosenStops', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<Filters
				filterByStops={jest.fn()}
				changeCurrency={jest.fn()}
				selectedCurrency="RUB"
			/>
		);
		expect(component).toMatchSnapshot();
	});
});