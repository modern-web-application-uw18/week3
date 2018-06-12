import React from 'react';
import ReactDOM from 'react-dom';
import AirBnbLayout from '../AirBnbLayout';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < AirBnbLayout / > , div);
    ReactDOM.unmountComponentAtNode(div);
});