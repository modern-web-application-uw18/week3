import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class AddRental extends Component {
  handleClick = (e) => {
  e.preventDefault();
  this.props.addRental(this.props)
  }

    render() {
      return( 
      <div className="flex-item">
        <img src={this.props.image} height="164px" width="246px" alt=""></img>
        <p>{this.props.houseType}</p>
        <p>{this.props.title}</p>
        <p>{this.props.city}, {this.props.country}</p>
        <p>${this.props.cost} {this.props.description}</p>
        <p>Stars: {this.props.stars} Number of Reviews: {this.props.numberofreviews}</p>
        <p>Host: {this.props.host} {this.props.issuperhost}</p>
        <button onClick={this.handleClick}>Add Rental</button>
            </div>
       ) }
  }

  AddRental.propTypes = {
    image: PropTypes.string,
    houseType: PropTypes.string,
    title: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    cost: PropTypes.number,
    description: PropTypes.string,
    starts: PropTypes.string,
    numberofreviews: PropTypes.number,
    host: PropTypes.string,
    issuperhost: PropTypes.bool,
    handleClick: PropTypes.func,
  }

export default AddRental;