import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import Card from './Card.js';

describe('Card', () => {
  it('Smoke Test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Match Snapshot', () => {
    const component = TestRenderer.create(<Card />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  
})
