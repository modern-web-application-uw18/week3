import React from 'react';
import ReactDOM from 'react-dom';
import RentalList from './RentalList';
import TestRenderer from 'react-test-renderer';

describe("RentalList", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RentalList allrentals={getRentals()} rentalAdd={()   => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render component with list of available rentals with image and cost', () => {
        const component = TestRenderer.create(<RentalList />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});