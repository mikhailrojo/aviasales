import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {NotFound} from '../index';

describe('Snapshot', () => {
	it('render NotFound', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(<NotFound />);
		expect(component).toMatchSnapshot();
	});
});
