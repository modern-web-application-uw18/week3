import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Rental.css';

class Rental extends Component {  
  render() {    
    return (      
      <div className="col span">
        <img src={this.props.image} alt="" />
        <h2>{this.props.title}</h2>
        <p>${this.props.cost}</p>
        <button value={this.props.id} onClick={this.props.rentalAdd} className="_uutxinj">Rent Now</button>        
      </div> 
         
    );
  }
}

Rental.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  cost: PropTypes.number,
  rentalAdd: PropTypes.func

};

export default Rental;
