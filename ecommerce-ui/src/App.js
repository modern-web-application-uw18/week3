import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import ecData from './data-json/ecommerce-data.json';

class App extends Component {
  render() {
    return (
	<div id='pagecontainer'>
	<div id="root"></div>
		<h2>Your Selected Rentals</h2>
			<div id='cartcontainer'>
			<p id="derp">Empty cart</p>
			</div>
		<h2>Available Rentals</h2>
		<div id='rentalcontainer'> 
		{ecData.map(function(ecDataMapped){
          return <div class="rentaldiv"><ul><li><h3>{ecDataMapped.title}</h3></li>
		  <li>Type of listing: {ecDataMapped.houseType}</li>
		  <li>City: {ecDataMapped.location.city}</li>
		  <li>Country: {ecDataMapped.location.country}</li>
		  <li>Price: {ecDataMapped.payment.cost} USD</li>
		  <li>Description: {ecDataMapped.payment.description}</li>
		  <li><img class="rentalimage" src={ecDataMapped.image} alt='housing'/></li>
		  <li>Host: {ecDataMapped.host.name}</li>
		  <li>Rating: {ecDataMapped.rating.stars} stars</li>
		  <li>Reviews: {ecDataMapped.rating.reviews}</li>
		  <li><button onClick="rentalArray({ecDataMapped.title})">Rent</button></li>
		  </ul>
		  </div>;
        })
        }
      </div>     
      </div>
    );
  }
}

function rentalArray(props) {
  const rentalArrayMember = props.rentalArrayMember;
  const listRentals = rentalArrayMember.map((rentalThingy) =>
    <li>{rentalThingy}</li>
  );
  return (
    <ul>{listRentals}</ul>
  );
}

const rentalArrayMember = [];
ReactDOM.render(
  <rentalArray rentalArrayMember={rentalArrayMember} />,
  document.getElementById('root')
);

export default App;
