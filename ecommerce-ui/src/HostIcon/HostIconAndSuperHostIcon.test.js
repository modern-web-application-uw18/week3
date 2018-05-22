import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import SuperHostIcon from './SuperHostIcon';
import HostIcon from './HostIcon';

describe('SuperHostIcon component', () => {
  it('should render', () => {
    const component = ReactTestRenderer.create(<SuperHostIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('HostIcon component', () => {
  it('should render', () => {
    const component = ReactTestRenderer.create(<HostIcon />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
