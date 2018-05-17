import React from 'react';
import ReactDOM from 'react-dom';
import RentalItem from './RentalItem';
import TestRenderer from 'react-test-renderer';

describe("RentalItem", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RentalItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

   it('Should render component with list of rental cart info and total', () => {
        const component = TestRenderer.create(<RentalItem />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});