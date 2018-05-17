import React from 'react';
import ReactDOM from 'react-dom';
import RentalCart from './RentalCart';
import TestRenderer from 'react-test-renderer';

describe("RentalCart", () => {
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RentalCart homesCart={homesCart()} cancelYourRent={() => {}} whatRentalTotal={() => { return 0; }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('Should render component with cart header and total', () => {
        const component = TestRenderer.create(<RentalCart />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});