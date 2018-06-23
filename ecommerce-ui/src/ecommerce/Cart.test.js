import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Cart from './Cart'

describe("Cart", () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Cart />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it ('Should render with correct info on the individual properties', () => {
		const component = TestRenderer.create(<Cart />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
