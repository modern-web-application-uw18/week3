import React from 'react';
import BnbListings from './BnbListings';
import ReactTestRenderer from 'react-test-renderer';
import airbnbs from '../airbnbs.json';

describe('BnbListings component', () => {
  it('should render', () => {
    const component = ReactTestRenderer.create(<BnbListings bnb={airbnbs[0]} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
