import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Total from './Total.js';

describe('Total Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Total />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render the cart without crashing', ()=>{
        const component = TestRenderer.create(<Total />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

