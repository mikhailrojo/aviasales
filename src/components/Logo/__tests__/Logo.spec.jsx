import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {Logo} from '../index';

describe('Snapshot', () => {
	it('render Logo', () => {
		const renderer = new ShallowRenderer();
		const component = renderer.render(<Logo />);
		expect(component).toMatchSnapshot();
	});
});
