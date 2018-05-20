import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import Navigation from './Navigation.js';

describe('Navigation', () => {
  // basic test to see if it compiles
  it('Smoke Test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // lazy mode testing, must match the snapshot
  it('Match Snapshot', () => {
    const component = TestRenderer.create(<Navigation />);
    expect(component.toJSON()).toMatchSnapshot();
  });

})
