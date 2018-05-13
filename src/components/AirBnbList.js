import React, { Component } from 'react';
import airbnbs from '../airbnbs.json';
import AirBnbLayout from './AirBnbLayout';

// loops through JSON, maps object
// feeds App.js

class AirBnbList extends Component {


    render() {
        return (
        <div className="all-rentals">
            {airbnbs.map((airbnb, index) =>
                <AirBnbLayout 
                key={index} 
                id = {index} 
                title = {airbnb.title} 
                image = {airbnb.image} 
                cost = {airbnb.payment.cost} 
                city = {airbnb.location.city}
                country = {airbnb.location.country}/>
                )}
            </div>
        );
    }
    }


export default AirBnbList;