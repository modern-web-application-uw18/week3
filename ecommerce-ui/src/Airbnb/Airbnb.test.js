import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import Airbnb from './Airbnb.js';

describe('Airbnb', () => {
  it('Smoke Test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Airbnb />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})
