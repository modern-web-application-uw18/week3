import React from 'react';
import ReactDom from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Store from './Store.js'

describe('Store', () => {
    it('should clear smoke test for Store rendering', () => {
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
        ReactDom.render(<Store inventory={dummyProp}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('should render a minimal store front', () => {
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
        const component = TestRenderer.create(<Store inventory={dummyProp}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
    
})