import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Location from './Location';

describe('Location', () => {
    it('renders without crashing', () => {
        const location = {"city": "Miami", "country": "USA"};
        const div = document.createElement('div');
        ReactDOM.render(<Location location={location} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with city and country', () => {
        const location = {"city": "Helsinki", "country": "Finland"};
        const component = TestRenderer.create(
            <Location location={location} />);
            expect(component.toJSON()).toMatchSnapshot();
    });
});