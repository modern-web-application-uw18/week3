import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import SearchInfo from './SearchInfo.js';

describe('SearchInfo', () => {
  it('Smoke Test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Match Snapshot', () => {
    const component = TestRenderer.create(<SearchInfo />);
    expect(component.toJSON()).toMatchSnapshot();
  });

})
