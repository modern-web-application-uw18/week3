import React from 'react';
import { shallow, mount} from 'enzyme';
import Cart from './Cart';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import mockListings from '../../../assets/airbnbs.json';

describe('<Cart />', () => {
    
    it('Snapshot test', () => {
        const wrapper = mount(<Cart cartContent={mockListings} cartShow={true} />);
        

        wrapper.find('#Centrally-located Manhattan studio').simulate('click');
        console.log(wrapper.debug());

        // expect(wrapper).toMatchSnapshot();

    })
})