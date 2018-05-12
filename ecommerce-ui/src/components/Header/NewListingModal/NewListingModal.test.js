import React from 'react';
import { shallow, mount } from 'enzyme';
import NewListingModal from './NewListingModal';
import Header from '../../Header/Header';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import mockListings from '../../../assets/airbnbs.json';
import Layout from '../../../containers/Layout/Layout';


describe('<NewListingModal />', () => {


    it('Snapshot test', () => {
        const wrapper2 = shallow(<Layout />);
        let mockDataHandler = wrapper2.instance().mockDataHandler;

        const wrapper = shallow(
            <NewListingModal
                mockDataArr={mockListings}
                dataHandler={mockDataHandler}
                formShow={true}
                handleFormClose={()=>null}
            />
        );

        expect(wrapper.find(Modal)).toHaveLength(1);

        expect(wrapper.find('.submitBtn')).toHaveLength(1);
        wrapper.find('.submitBtn').simulate('click');

        expect(wrapper).toMatchSnapshot();
    })
})