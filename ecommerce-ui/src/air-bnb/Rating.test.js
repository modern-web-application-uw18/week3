import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Rating from './Rating';

describe('Rating', () => {
    it('renders without crashing', () => {
        const rating = {"stars": 3.5, "reviews": 675};
        const div = document.createElement('div');
        ReactDOM.render(<Rating rating={rating} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with stars and reviews', () => {
        const rating = {"stars": 3, "reviews": 111};
        const component = TestRenderer.create(
            <Rating rating={rating}/>);
            expect(component.toJSON()).toMatchSnapshot();
    });
});