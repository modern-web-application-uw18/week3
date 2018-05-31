import React, { Component } from 'react';

class TotalArea extends Component {
    calculateTotal = () => {
        console.log('CalcTotal',this.props);
        const { items } = this.props;
        //console.log('my items', items[1]);
        const total = items.reduce((runningTotal, item) => {
            const cost = parseFloat(item.cost);
            console.log('cost', item.cost);
            if (Number.isNaN(cost)) {
                return runningTotal;
            }
            return runningTotal + cost;
        }, 0);
        return total;
    }

    render() {
        return (
            <strong>Total: {this.calculateTotal()}</strong>
        )
    }
}

export default TotalArea;