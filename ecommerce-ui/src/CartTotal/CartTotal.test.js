import React from 'react';
import ReactDom from 'react-dom';
import TestRenderer from 'react-test-renderer';
import CartTotal from './CartTotal.js'

describe('CartTotal', () => {
    it('should clear smoke test for CartTotal rendering', () => {
        const div = document.createElement('div');
        const dummyProp = [
            {
                "title": "Cardboard Box",
                "houseType": "Apartment",
                "image": "./itsABox.jpg",
                "location": {
                    "city": "Seattle",
                    "country": "USA"
                },
                "payment": {
                    "cost": 1,
                    "description": "Free cancellation"
                },
                "host": {
                    "name": "I5 underpass",
                    "isSuperhost": false
                },
                "rating": {
                    "stars": 1,
                    "reviews": 6876
                }
            }
        ];
        ReactDom.render(<CartTotal itemsInCart={dummyProp}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('should render a minimal CartTotal section of Cart', () => {
        const dummyProp = [
            {
                "title": "Cardboard Box",
                "houseType": "Apartment",
                "image": "./itsABox.jpg",
                "location": {
                    "city": "Seattle",
                    "country": "USA"
                },
                "payment": {
                    "cost": 1,
                    "description": "Free cancellation"
                },
                "host": {
                    "name": "I5 underpass",
                    "isSuperhost": false
                },
                "rating": {
                    "stars": 1,
                    "reviews": 6876
                }
            }
        ];
        const component = TestRenderer.create(<CartTotal itemsInCart={dummyProp}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
})