import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.js';

export default class QuickSearches extends Component {

    render() {
      const quickSearch = this.props.quickSearch;
      const searches = quickSearch.map((search, index) => {
        return <Card search={search} title={search.title} image={search.image} key={index} index={index}/>
      });

        return (
          <section className="searches">
            <h2>Quick Searches</h2>
            {searches}
          </section>
        );
    }
}

QuickSearches.propTypes = {
  'quickSearch': PropTypes.array.isRequired
}
