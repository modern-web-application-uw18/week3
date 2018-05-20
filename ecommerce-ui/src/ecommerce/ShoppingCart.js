import React, { Component } from 'react';

export class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            counter: 0
        };
    }

    onAddItem = (e) => {
        // const currentCount = this.state.counter;
        // const newCount = currentCount + 1;

        this.setState((prevState, props) => {
            const currentCount = prevState.counter;
            const newCount = currentCount + 1;
             return {
                 counter: newCount
             }
        })
    }


    addItem = ()  => {
        this.setState((prevState, props) => {
            const items = prevState.items;
            const item = prevState.counter;
            alert('One item got added');
            // //add item to shopping cart
            // if (item) {
            //     items.push(item);
            // } else {
            //     alert('You should add an item');
            // }

            // return {
            //     item: items,
            //     inputText: ''
            // };
        });
    }


    render() {
        const listItems = this.state.items.map((item, indx) => {
            // return <TodoItem key={indx} text={item} />
        });

        return (
            <div>
                <h2>Shopping Cart List</h2>
                <div>
                    <input
                        onChange={this.onInputChange}
                        value={this.state.inputText}
                    />

                    <button
                        disabled={this.state.inputText === ''}
                        onClick={this.addItem}
                    >Add this Rental</button>
                </div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default ShoppingCart;