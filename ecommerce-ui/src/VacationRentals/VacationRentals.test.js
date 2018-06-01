import React from 'react';
import ReactDOM from 'react-dom';
import VacationRentals from './VacationRentals';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VacationRentals />, div);
  ReactDOM.unmountComponentAtNode(div);
});
