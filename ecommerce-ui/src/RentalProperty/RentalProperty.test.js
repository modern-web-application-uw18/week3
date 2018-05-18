import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import RentalProperty from './RentalProperty';
import rentalProperties from './../airbnbs.json';
import BookingCart from './../BookingCart/BookingCart'

let rentalProperty = rentalProperties[0];

describe('Rental property component', () => {
    it('should render', () => {
        const component = ReactTestRenderer.create(<RentalProperty rentalProperty={rentalProperty}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});