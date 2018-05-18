import React from 'react';
import BnbDetails from './BnbDetails';
import ReactTestRenderer from 'react-test-renderer';
import airbnbs from '../airbnbs.json';
import PropTypes from 'prop-types'

describe('BnbDetails component', () => {
  it('should render', () => {
     const match = {
      params: {
        id: airbnbs[0].id
      }
    }
    const component = ReactTestRenderer.create(<BnbDetails  match={match} addItemToCart={"test"} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
