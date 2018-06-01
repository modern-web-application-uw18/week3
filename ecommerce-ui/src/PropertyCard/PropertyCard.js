import React, { Component } from 'react';
import './PropertyCard.css';
import PropTypes from 'prop-types';

class PropertyCard extends Component {
       
    render() {
        const objAirBnB = this.props.dataAirBnB;

        return (
        <div className = "overallFlex">
        {
          objAirBnB.map((listing) => {
            const hostInfo = {
                hostName: listing.host.name, 
                isSuperHost: listing.host.isSuperhost
            };

            return (
            <div className = "listingFlex-container">
                <div className = "listingImage"><img src={listing.image} alt={listing.title}/></div>
                <div>{listing.title}</div>
                <div>{listing.houseType}</div>
                <div>{hostInfo.hostName}</div>
                <button className="AddItem"  onClick={() => this.props.onAddToCartClick(listing.title)}>Add To Cart</button>
                <br />
                <div>Cost: ${listing.payment.cost}</div>
                <div>{listing.payment.description}</div>
            </div>
            )
          })
        }
        </div>
        )
    }
}

PropertyCard.propTypes = {
    dataAirBnB: PropTypes.array
  };


export default PropertyCard;