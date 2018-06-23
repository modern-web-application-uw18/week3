import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import PropertyItem from './PropertyItem'

describe("PropertyItem", () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<PropertyItem />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it ('Should render with correct info on the individual properties', () => {
		const component = TestRenderer.create(<PropertyItem />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
