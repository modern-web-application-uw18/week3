import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Host from './Host';

describe('Host', () => {
    it('renders without crashing', () => {
        const rating = {stars: 4, reviews: 123};
        const host = {name: "George Bush", isSuperhost: true};
        const div = document.createElement('div');
        ReactDOM.render(<Host host={host} rating={rating} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with host name, superhost, stars and reviews', () => {
        const rating = {stars: 4.5, reviews: 313};
        const host = {name: "Steve Powers", isSuperhost: false};
        const component = TestRenderer.create(
            <Host host={host} rating={rating}/>);
            expect(component.toJSON()).toMatchSnapshot();
    });
});