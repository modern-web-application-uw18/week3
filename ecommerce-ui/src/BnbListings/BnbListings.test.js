import React from 'react';
import BnbListings from './BnbListings';
import ReactTestRenderer from 'react-test-renderer';
import airbnbs from '../airbnbs.json';
import {
  MemoryRouter
} from "react-router-dom";

describe('BnbListings component', () => {
  it('should render', () => {
    const component = ReactTestRenderer.create(
      <MemoryRouter>
        <BnbListings bnb={airbnbs[0]} />
      </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
