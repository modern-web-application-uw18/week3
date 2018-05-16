import React from 'react';
import ReactDOM from 'react-dom';
import CartTotal from './cartTotal';
import TestRenderer from 'react-test-renderer'

describe("AddRental", () => {
    it('Smoke test make sure the component rendors', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<CartTotal/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

   
    it('Shoudl render a component with rental info and an add to cart button', () => {
        //create a snapshot
        const component = TestRenderer.create(<CartTotal/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

