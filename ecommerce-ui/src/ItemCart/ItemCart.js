import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
    render(){
        return(
            <div className="cart">
            <img src={this.props.item.image} alt="Rental in Cart" />
            <p>{this.props.item.title}</p>
            <p>Cost: <em>${this.props.item.payment.cost}</em></p>
            <button onClick={this.props.deleteRental}>Delete</button>
            </div>
        );
    }
}
ItemCart.propTypes = {
    item: propTypes.object,
    deleteRental: propTypes.func
}
export default ItemCart;