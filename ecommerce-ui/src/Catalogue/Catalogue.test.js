import React from 'react';
import ReactDom from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Catalogue from './Catalogue.js'

describe('Catalogue', () => {
    it('should clear smoke test for Catalogue rendering', () => {
        const div = document.createElement('div');
        const dummyFunc = (something) => {
            return () => {
                this.setState((prevState, props) => {
                    const purchasedUnit = something;
                    const newPurchasedUnits = prevState.purchasedUnits;
                    newPurchasedUnits.push(purchasedUnit);
                    return {
                        purchasedUnits: newPurchasedUnits
                    };
                });
            }
        };
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
        ReactDom.render(<Catalogue inventory={dummyProp} onAddToCart={dummyFunc}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('should render a minimal catalogue section of store front', () => {
        const dummyFunc = (something) => {
            return () => {
                this.setState((prevState, props) => {
                    const purchasedUnit = something;
                    const newPurchasedUnits = prevState.purchasedUnits;
                    newPurchasedUnits.push(purchasedUnit);
                    return {
                        purchasedUnits: newPurchasedUnits
                    };
                });
            }
        };
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
        const component = TestRenderer.create(<Catalogue inventory={dummyProp} onAddToCart={dummyFunc}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
})