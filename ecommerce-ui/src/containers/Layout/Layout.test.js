import React from 'react';
import { shallow, mount} from 'enzyme';
import Layout from './Layout';
import Header from '../../components/Header/Header'
import classes from './Layout.css';
import mockDataArr from '../../assets/airbnbs.json';
import Card from '../../components/Card/Card';

describe('<Layout />', () => {

    let mockListing = {
        "title": "Centrally-located Manhattan studio",
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
        const wrapper = mount(<Layout  />);

        wrapper.instance().mockDataHandler(mockListing);
        wrapper.instance().removeListingFromTheCartHandler(mockListing);
        wrapper.instance().addListingToTheCartHandler(mockListing);

        expect(wrapper).toMatchSnapshot();
    })
})