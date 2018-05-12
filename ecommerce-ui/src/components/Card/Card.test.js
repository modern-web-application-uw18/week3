import React from 'react';
import { shallow, mount} from 'enzyme';
import Card from './Card';
import Layout from '../../containers/Layout/Layout';
import mockListings from '../../assets/airbnbs.json';

import classes from './Card.css';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import Star from '../Star/Star';

describe('<Card />', () => {

    it('Snapshot test', () => {

        const wrapper2 = mount(<Layout  />);
        let fn = wrapper2.instance().addListingToTheCartHandler;

        const wrapper = mount(<Card item={mockListings[0]} addListingToTheCartHandler={fn}  />);
               
        expect(wrapper.find('.btn')).toHaveLength(1);
        wrapper.find('.btn').simulate('click');

        expect(wrapper).toMatchSnapshot();
    })
})