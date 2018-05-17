import React from 'react';
import ReactDOM from 'react-dom';
import RentalPage from '../RentalPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RentalPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
