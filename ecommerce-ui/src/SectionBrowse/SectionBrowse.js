import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.js';

export default class SectionBrowse extends Component {

    render() {
      const airbnbs = this.props.airbnbs;
      const places = airbnbs.map((place, index) => {
        return <Card place={place} image={place.image} key={index} index={index} addToCart={this.props.addToCart}/>
      });

        return (
          <section className="places">
          <h2>Available Places</h2>
            {places}
          </section>
        );
    }
}

SectionBrowse.propTypes = {
  airbnbs: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
}

SectionBrowse.defaultProps = {
  airbnbs: [{
    title: 'test_title',
    houseType: 'Condo',
    image: 'test_image',
    location: {
      city: 'honolulu',
      country: 'USA'
    },
    payment: {
      cost: 999,
      description: 'Free cancellation'
    },
    host: {
      name: 'Eric',
      isSuperhost: true
    },
    rating: {
      stars: 5,
      review: 999
    }
  }],
  addToCart: () => {
    console.log('add to cart test function');
  }
}
