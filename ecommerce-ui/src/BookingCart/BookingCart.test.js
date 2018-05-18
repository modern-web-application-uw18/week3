import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import BookingCart from './BookingCart';
import rentalProperties from './../airbnbs.json';

describe('Booking Cart component', () => {
    it('should render', () => {
        const component = ReactTestRenderer.create(<BookingCart rentalProperties={rentalProperties}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});