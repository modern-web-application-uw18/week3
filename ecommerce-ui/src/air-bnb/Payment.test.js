import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Payment from './Payment';

describe('Payment', () => {
    it('renders without crashing', () => {
        const payment = {"cost": "145", "description": "Free cancellation"};
        const div = document.createElement('div');
        ReactDOM.render(<Payment payment={payment} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with cost and description', () => {
        const payment = {"cost": "200", "description": "One night cancellation fee"};
        const component = TestRenderer.create(
            <Payment payment={payment} />);
            expect(component.toJSON()).toMatchSnapshot();
    });
});