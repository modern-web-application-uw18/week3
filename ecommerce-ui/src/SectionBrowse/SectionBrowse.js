import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.js';

export default class Places extends Component {

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

Places.propTypes = {
  airbnbs: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
}
