import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './ShoppingCart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingCart productsInCart={productsInCart()} removeFromCart={() => {}} getCartTotal={() => { return 0; }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function productsInCart() {
  let products = [
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
    },
    {
        "title": "Denver apartment outside Union Station",
        "houseType": "Apartment",
        "image": "https://images.unsplash.com/photo-1519424187720-db6d0fc5a5d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19f783ae564d7c6da4777cde1a84c1c9&auto=format&fit=crop&w=500&q=80",
        "location": {
            "city": "Denver",
            "country": "USA"
        },
        "payment": {
            "cost": 130,
            "description": ""
        },
        "host": {
            "name": "Jamie",
            "isSuperhost": true
        },
        "rating": {
            "stars": 4.5,
            "reviews": 381
        }
    }
  ];
  return products;
}
