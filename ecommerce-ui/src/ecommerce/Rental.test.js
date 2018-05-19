import React from 'react';
import Rental from './Rental';
import ReactTestRenderer from 'react-test-renderer';

describe('Adding numbers', () => {
    it('should adding numbers', () => {
        expect(2 + 2 + 3).toBe(7);
    });
});

describe('Renders Airbnb rental properties in clearly understandble format', () => {
    it('should render all the properties', () => {
        // const Rentals = <Rental />;
        const component = ReactTestRenderer.create(<Rental />)
        // console.log(component.toJSON());

        expect(component.toJSON()).toMatchSnapshot();
    });
});