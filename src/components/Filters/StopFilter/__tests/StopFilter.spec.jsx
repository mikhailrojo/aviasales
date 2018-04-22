import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {StopFilter} from '../index';

describe('Snapshot', () => {
	it('render StopFilter with only last option selected', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<StopFilter
				filterByStops={jest.fn()}
				chosenStops={[false,false,false,true]}
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
