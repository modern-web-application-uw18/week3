import React from 'react';
import ReactDOM from 'react-dom';
import RentalCheckout from './RentalCheckout';
import TestRenderer from 'react-test-renderer';

describe("RentalCheckout", () => {
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RentalCheckout />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('Should render component with rent cancellation button', () => {
        const component = TestRenderer.create(<RentalCheckout />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});