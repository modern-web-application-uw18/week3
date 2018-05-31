import React, { Component } from 'react';
import './PropertyCard.css';

class PropertyCard extends Component {
    
    // handleClick = () => {
    //     console.log('title', listing.title);
    //     console.log('cost', listing.payment.cost);
    // }
    
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
                <div className = "listingImage"><img src={listing.image} /></div>
                <div>{listing.title}</div>
                <div>{listing.houseType}</div>
                <div>{hostInfo.hostName}</div>
                <button className="AddItem"  onClick={this.props.onAddToCartClick}>Add To Cart</button>
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

export default PropertyCard;