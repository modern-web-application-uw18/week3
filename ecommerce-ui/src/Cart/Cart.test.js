import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Cart from './Cart.js'

describe('Cart Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const testFunction = (x) => {
            return()=> {
                this.setState((prevState) => {
                    const buyRental = x;
                    const newBuyRentals = prevState.buyRentals;
                    newBuyRentals.push(buyRental);
                    return {
                        buyRentals: newBuyRentals
                    };
                });
            }
        }
        const testProp = [{
            "title": "Quaint 3-bedroom home in Gamla stan",
            "houseType": "Entire House",
            "image": "https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80",
            "location": {
                "city": "Stockholm",
                "country": "Sweden"
            },
            "payment": {
                "cost": 230,
                "description": "Free cancellation"
            },
            "host": {
                "name": "Olivia",
                "isSuperhost": false
            },
            "rating": {
                "stars": 5,
                "reviews": 83
            }
        }];


        ReactDOM.render(<Rental airbnb={testProp} deleteRental={testFunction}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render Rental with testProp data', ()=>{
        const testFunction = (x) => {
            return()=> {
                this.setState((prevState) => {
                    const buyRental = x;
                    const newBuyRentals = prevState.buyRentals;
                    newBuyRentals.push(buyRental);
                    return {
                        buyRentals: newBuyRentals
                    };
                });
            }
        }
        const testProp = [{
            "title": "Quaint 3-bedroom home in Gamla stan",
            "houseType": "Entire House",
            "image": "https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80",
            "location": {
                "city": "Stockholm",
                "country": "Sweden"
            },
            "payment": {
                "cost": 230,
                "description": "Free cancellation"
            },
            "host": {
                "name": "Olivia",
                "isSuperhost": false
            },
            "rating": {
                "stars": 5,
                "reviews": 83
            }
        }];
        ReactDOM.render(<Cart airbnb={testProp} deleteRental={testFunction}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render the cart without crashing', ()=>{
        const component = TestRenderer.create(<Cart airbnb={testProp} deleteRental={testFunction}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});