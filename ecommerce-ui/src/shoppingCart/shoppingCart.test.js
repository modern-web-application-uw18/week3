import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import ShoppingCart from './shoppingCart.js';



describe('ShoppingCart component', () => { 
it('renders without crashing', () => {
    const div = document.createElement('div');

    const testProps = [
         {
            "title": "Centrally-located Manhattan studio",
            "houseType": "Apartment",
            "image": "https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=500&q=80",
            "location": {
                "city": "New York",
                "country": "USA"
            },
            "payment": {
                "cost": 105,
                "description": "Free cancellation"
            },
            "host": {
                "name": "Robert",
                "isSuperhost": true
            },
            "rating": {
                "stars": 3,
                "reviews": 133
            }
        }
    ]

    ReactDOM.render(<ShoppingCart bookedRental={testProps}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});