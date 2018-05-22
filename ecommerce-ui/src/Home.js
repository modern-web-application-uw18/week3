import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import airbnbs from './airbnbs.json';
import BnbListings from './BnbListings/BnbListings';

class Home extends Component {

  render() {
    return (
      <section className="page-content">
        <h2 className="section-heading">Today&apos;s featured BNBs</h2>
        <div className="page-content--container">
          {airbnbs.map((airbnbs, idx) => {
            return <BnbListings key={idx} bnb={airbnbs} />;
          })}
        </div>
      </section>
    );
  }
}

export default Home;
