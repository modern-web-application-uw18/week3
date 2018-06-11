import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import App from '../App';
import Home from './Home';
import testHome from '../json/test-home.json';

describe('Home', () => {

    function isInCart(home,e) {
        return false;
    }

    it('renders without crashing with data', () => {
        const div = document.createElement('div');
        const element = testHome.map((home, index) => {
            return <Home key={index} home={home} 
                    isInCart={e => isInCart(home,e)} />        
        });
        ReactDOM.render(element, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, description, image, etc.', () => {
        const element = testHome.map((home, index) => {
            return <Home key={index} home={home}
                    isInCart={e => isInCart(home,e)} />    
        });
        const component = TestRenderer.create(element);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
