import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Airbnb from './index'

describe("Airbnb", () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Airbnb />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it ('Should render with correct info on the individual properties', () => {
		const component = TestRenderer.create(<Airbnb />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
