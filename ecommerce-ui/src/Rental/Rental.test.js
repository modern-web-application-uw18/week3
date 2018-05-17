import React from 'react';
import ReactDOM from 'react-dom';
import Rental from './Rental';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rental />, div);
  ReactDOM.unmountComponentAtNode(div);
});
