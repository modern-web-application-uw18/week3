import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import PropertyList from './PropertyList'

describe("PropertyList", () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<PropertyList />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it ('Should render with correct info on the individual properties', () => {
		const component = TestRenderer.create(<PropertyList />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
