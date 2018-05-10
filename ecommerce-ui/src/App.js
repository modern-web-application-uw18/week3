import React, { Component } from 'react';
import './index.css';
import ecData from './data-json/ecommerce-data.json';
class App extends Component {
  render() {
    return (
		<div id='pagecontainer'>
	 <h2>Rentals</h2>
	 <div id='rentalcontainer'> 
		{ecData.map(function(ecDataMapped){
          return <div class="rentaldiv"><ul><li><h3>{ecDataMapped.title}</h3></li>
		  <li>Type of listing: {ecDataMapped.houseType}</li>
		  <li>City: {ecDataMapped.location.city}</li>
		  <li>Country: {ecDataMapped.location.country}</li>
		  <li>Price: {ecDataMapped.payment.cost}</li>
		  <li>Description: {ecDataMapped.payment.description}</li>
		  <li><img class="rentalimage" src={ecDataMapped.image} alt='housing'/></li>
		  <li>Host: {ecDataMapped.host.name}</li>
		  <li>Rating: {ecDataMapped.rating.stars} stars</li>
		  <li>Reviews: {ecDataMapped.rating.reviews}</li>
		  </ul></div>;
        })
        }
      </div>     
      </div>
    );
  }
}

export default App;
