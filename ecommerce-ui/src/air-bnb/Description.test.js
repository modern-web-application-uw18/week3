import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Description from './Description';

describe('Description', () => {
    it('renders without crashing', () => {
        const location = {city: 'Tokyo', country: 'Japan'};
        const div = document.createElement('div');
        ReactDOM.render(<Description
            title="Upscale apartment for two in Tokyo suburb"
            houseType="Apartment"
            location={location} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, house type, city, country', () => {
        const location = {city: 'Valencia', country: 'Spain'};
        const component = TestRenderer.create(
            <Description title="Urban home for six in Valencia"
                         houseType="Entire House"
                         location={location} />);
            expect(component.toJSON()).toMatchSnapshot();
    });
});