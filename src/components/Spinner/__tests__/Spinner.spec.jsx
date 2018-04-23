import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {Spinner} from '../index';

describe('Snapshot', () => {
	it('render Spinner', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(<Spinner />);
		expect(component).toMatchSnapshot();
	});
});
