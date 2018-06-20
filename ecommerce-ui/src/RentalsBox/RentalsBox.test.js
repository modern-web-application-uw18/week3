import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import RentalsBox from './RentalsBox';

describe('Component with all of the Rental objects', () => {
    it('test for rendering RentalsBox Component', () => {
        const div = document.createElement('div');
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


        ReactDOM.render(<RentalsBox airbnb={testProp}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render RentalsBox with testProp data', ()=>{
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
        const component = TestRenderer.create(<RentalsBox airbnb={testProp}  />, div);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

