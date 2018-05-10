import React from 'react';
import './index.css';
import ecommerceData from './ecommerce-data.json';
    function makeWork(){
	const dataJson = (props) => {(
	<div id='pagecontainer'>
	 <h2>For you</h2>
	 <div id='yourcontainer'> 
		{ecommerceData.map(function(ecommerceDataMapped){
          return <div class="yourarticlediv"><ul><li><h3>{ecommerceDataMapped.title}</h3></li>
		  <li>Type of listing: {ecommerceDataMapped.houseType}</li>
		  <li>Location: {ecommerceDataMapped.location}{ecommerceDataMapped.location.city}<br />
		  {ecommerceDataMapped.location.country}<br /></li>
		  <li>Price: {ecommerceDataMapped.payment.cost}</li>
		  <li>Description: {ecommerceDataMapped.payment.description}</li>
		  <li><img class="articleimage" src={ecommerceDataMapped.image} alt='housing'/></li>
		  <li>Host: {ecommerceDataMapped.host.name}</li>
		  <li>Rating: {ecommerceDataMapped.rating.stars} stars</li>
		  <li>Reviews: {ecommerceDataMapped.rating.reviews}</li>
		  </ul></div>;
        })
        }
        

      </div>     
      </div>
	  );

	}
	}

export default dataJson;

