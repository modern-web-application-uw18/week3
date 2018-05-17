import React, { Component } from 'react';
import Cart from '../Cart/Cart.js';
import Catalogue from '../Catalogue/Catalogue.js';
import './Store.css';
import PropTypes from 'prop-types';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasedUnits: props.initialValue
        };
    }

    onAddToCart = (unit) => {
        return () => {
            this.setState((prevState, props) => {
                const purchasedUnit = unit;
                const newPurchasedUnits = prevState.purchasedUnits;
                newPurchasedUnits.push(purchasedUnit);
                return {
                    purchasedUnits: newPurchasedUnits
                };
            });
        }
    }

    onRemoveFromCart = (idx) => {
        return () => {
            this.setState((prevState, props) => {
              const newPurchasedUnits = prevState.purchasedUnits;
              newPurchasedUnits.splice(idx, 1)
              return {
                  purchasedUnits: newPurchasedUnits
              }
            });
        }
    }
    render() {
        return (
            <div className="Store">
                <div>
                    <p>Your Cart</p>
                    <Cart 
                        itemsInCart={this.state.purchasedUnits}
                        onRemoveFromCart={this.onRemoveFromCart}
                    />
                </div>
                <div>
                    <p>Available To Book:</p>
                    <Catalogue
                        inventory={this.props.inventory}
                        onAddToCart={this.onAddToCart}
                    />
                </div>
            </div>
        );
    }
}

Store.propTypes = {
    initialValue: PropTypes.array,
    inventory: PropTypes.array
}

Store.defaultProps = {
    initialValue : []
}

export default Store;