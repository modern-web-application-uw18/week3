import React from 'react';
import BnbDetails from './BnbDetails';
import ReactTestRenderer from 'react-test-renderer';
import airbnbs from '../airbnbs.json';
import PropTypes from 'prop-types'


export default class WithContext extends React.Component {
  static contextTypes = {
    match: PropTypes.any,
    addItemToCart: PropTypes.any,
  }

  render () {
    const match = {
      params: {
        id: airbnbs[0].id
      }
    }
    return (
      <div><BnbDetails match={match} addItemToCart={"test"} /></div>
    )
  }
}

describe('BnbDetails component', () => {
  it('should render', () => {
    const component = ReactTestRenderer.create(<WithContext />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
