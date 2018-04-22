import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {Checkbox} from '../index';

describe('Snapshot', () => {
	it('render Checkbox', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(
			<Checkbox
				value="0"
				checked
				onChange={jest.fn()}
				label="без пересадок"
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
