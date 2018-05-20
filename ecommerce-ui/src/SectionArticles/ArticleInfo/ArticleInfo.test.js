import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import ArticleInfo from './ArticleInfo.js';

describe('ArticleInfo', () => {
  it('Smoke Test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArticleInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Match Snapshot', () => {
    const component = TestRenderer.create(<ArticleInfo />);
    expect(component.toJSON()).toMatchSnapshot();
  });

})
