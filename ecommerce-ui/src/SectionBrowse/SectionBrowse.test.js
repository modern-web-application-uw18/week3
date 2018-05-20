import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import SectionBrowse from './SectionBrowse.js';

describe('SectionBrowse', () => {
  it('Smoke Test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionBrowse />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Match Screenshot', () => {
    const component = TestRenderer.create(<SectionBrowse />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  
})
