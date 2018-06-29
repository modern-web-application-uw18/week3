import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart';
import TestRenderer from 'react-test-renderer'

describe("Cart", () => {
    it('Smoke test make sure the component rendors', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<Cart />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Shoudl render a component with rental info and an add to cart button', () => {
        //create a snapshot
        const component = TestRenderer.create(<Cart />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
