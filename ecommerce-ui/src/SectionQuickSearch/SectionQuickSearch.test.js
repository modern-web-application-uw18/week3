import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import SectionQuickSearch from './SectionQuickSearch.js';

describe('SectionQuickSearch', () => {
  it('Smoke test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionQuickSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Match Snapshot', () => {
    const component = TestRenderer.create(<SectionQuickSearch />);
    expect(component.toJSON()).toMatchSnapshot();
  });

})
