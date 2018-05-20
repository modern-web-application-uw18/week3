import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import SectionArticles from './SectionArticles.js';

describe('SectionArticles', () => {
  it('Smoke Test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionArticles />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Match Snapshot', () => {
    const component = TestRenderer.create(<SectionArticles />);
    expect(component.toJSON()).toMatchSnapshot();
  });

})
