
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';

// props and layout of each rental
// feeds AirBnbList

class AirBnbLayout extends Component {
    
    render() {
        return (   
          <div className="each-rental">
            <br></br>
            <img src={this.props.image} alt="rent-img" />
            <h2>{this.props.title}</h2>
            <h1>{this.props.city}, {this.props.country}   </h1>
            <button value={this.props.id} onClick={this.addProduct} className="rent-btn">Rent for ${this.props.cost}</button>
          </div>           
        );
      }
    }

    AirBnbLayout.propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
        cost: PropTypes.number,
        city: PropTypes.string,
        country: PropTypes.string
      };


export default AirBnbLayout;