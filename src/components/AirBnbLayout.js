
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';
// I need a way to assign src of image with ratings prop
import starsa from'./icons/stars-0.png';
import starsb from'./icons/stars-0.5.png';
import starsc from'./icons/stars-1.png';
import starsd from'./icons/stars-1.5.png';
import starse from'./icons/stars-2.png';
import starsf from'./icons/stars-2.5.png';
import starsg from'./icons/stars-3.png';
import starsh from'./icons/stars-3.5.png';
import starsi from'./icons/stars-4.png';
import starsj from'./icons/stars-4.5.png';
import starsk from'./icons/stars-5.png';

// props and layout of each rental
// feeds AirBnbList

class AirBnbLayout extends Component {

    render() {
      let stars = '';
      // need smarter way to do this.  Having trouble parameterizing src of image based on props
      if(this.props.rating === 0) {stars = starsa}
       else if(this.props.rating === .5) {stars = starsb}
       else if(this.props.rating === 1) {stars = starsc}
       else if(this.props.rating === 1.5) {stars = starsd}
       else if(this.props.rating === 2) {stars = starse}
       else if(this.props.rating === 2.5) {stars = starsf}
       else if(this.props.rating === 3) {stars = starsg}
       else if(this.props.rating === 3.5) {stars = starsh}
       else if(this.props.rating === 4) {stars = starsi}
       else if(this.props.rating === 4.5) {stars = starsj}
       else if(this.props.rating === 5) {stars = starsk};

      return ( 
          <div className="each-rental">
              <br></br>
              <div className = "rental-top">
                <img src={this.props.image} alt="rent-img" />
                <h2>{this.props.title}</h2>
                <h1>{this.props.city}, {this.props.country}  </h1>
              </div>
              <div className="rental-bottom">
                <h2>{'$'+this.props.cost+' per night'}</h2>
                <img src = {stars} alt= "stars"/>
                <br></br><br></br>
                <button value={this.props.id} onClick={this.props.addRental} className="rent-btn">Add to cart</button>
              </div>
              <br></br>
          </div>
        );
      }
    }

    AirBnbLayout.propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
        cost: PropTypes.number,
        city: PropTypes.string,
        country: PropTypes.string,
        rating: PropTypes.number,
        addRental: PropTypes.func
      };

export default AirBnbLayout;