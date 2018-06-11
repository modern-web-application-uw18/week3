import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Item from './Payment';

describe('Item', () => {
    it('renders without crashing', () => {
        const location = {"city": "London", "country": "England"};
        const payment = {"cost": 180, "description": "Free cancellation"}
        const div = document.createElement('div');
        ReactDOM.render(<Item
            title="Rustic flat in Sodo"
            image="https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80"
            location={location}
            payment={payment} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with cost and description', () => {
        const location = {"city": "Manchester", "country": "England"};
        const payment = {"cost": 130, "description": "Free cancellation"}
        const component = TestRenderer.create(
            <Item title="Quaint old home in sleepy neighborhood"
                image="https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80"
                location={location}
                payment={payment} />);
            expect(component.toJSON()).toMatchSnapshot();
    });
});