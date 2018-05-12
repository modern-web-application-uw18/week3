import React from 'react';
import { shallow, mount} from 'enzyme';
import Header from './Header';
import classes from './Header.css';
import Cart from './Cart/Cart';
import mockListings from '../../assets/airbnbs.json';
import NewListingModal from './NewListingModal/NewListingModal';

import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import MdAddBox from 'react-icons/lib/md/add-box';

describe('<Header />', () => {


    it('Snapshot test', () => {
        const wrapper = mount(<Header mockDataArr={mockListings} cartContent={[mockListings[0]]}/>);

        wrapper.instance().handleCartClose();
        wrapper.instance().handleCartShow();
        wrapper.instance().handleFormClose();
        wrapper.instance().handleFormShow();


        //expect(wrapper).toMatchSnapshot();
    })
})