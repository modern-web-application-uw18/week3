import React from 'react';
import { shallow, mount} from 'enzyme';
import NewListingModal from './NewListingModal';
import Header from '../../Header/Header';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';


describe('<NewListingModal />', () => {

    let mockListing = {
        "title": "Centrally-located Manhattan studio 2",
        "houseType": "Apartment",
        "image": "https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=500&q=80",
        "location": {
            "city": "New York",
            "country": "USA"
        },
        "payment": {
            "cost": 105,
            "description": "Free cancellation"
        },
        "host": {
            "name": "Robert",
            "isSuperhost": true
        },
        "rating": {
            "stars": 3,
            "reviews": 133
        }
    }

    it('Snapshot test', () => {
        const wrapper2 = mount(<Header cartContent={[mockListing]} />);
        let fn = wrapper2.instance().handleFormClose;


        const wrapper = mount(<NewListingModal handleFormClose={fn}/>);

        // wrapper.instance().mockDataHandler(mockListing);
        // wrapper.instance().removeListingFromTheCartHandler(mockListing);
        // wrapper.instance().addListingToTheCartHandler(mockListing);

        expect(wrapper).toMatchSnapshot();
    })
})