import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cart from '../img/ShoppingCart.png';
import Item from './Item';
import '../App.css';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    addToCart = (item,e) => {
        console.log(e);
        console.log(item);
        this.setState((prevState, props) => {
            console.log('prevState', prevState);
            console.log('props', props);

            const items = prevState.items;
            items.push(item);

            return {
                items: items
            };
        });
    }

    removeFromCart = (e) => {
        const item = e.target.value;
        this.setState((prevState, props) => {
            console.log('prevState', prevState);
            console.log('props', props);

            const items = prevState.items;
            items.remove(item);

            return {
                items: items
            };
        });
    }

    inCart = (item) => {
        this.state.items.forEach(itm => {
            if (itm === item) {
                return true;
            }
        });
        return false;
    }

    total = () => {
        let totalCost = 0;
        this.state.items.forEach(item => {
            totalCost += item.cost;
        });
        return totalCost;
    }

    render() {

        const listItems = this.props.state.items.map((item, index) => {
            return <Item key={index} item={item} />;
        });
        return (
            <div className="ShoppingCart">
                <h3>Shopping Cart</h3>
                <div className="item-list">
                    {listItems}
                </div>
                <div>{this.props.total()}</div>
                <img src={cart} alt="" />
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    items: PropTypes.array
};

export function addToCart(item,e) { };
export function removeFromCart(item,e) { };
export function inCart(item) { };
export default ShoppingCart;
