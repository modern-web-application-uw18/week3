import React from 'react';
import ReactDOM from 'react-dom';
import PropertyCard from './PropertyCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertyCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
