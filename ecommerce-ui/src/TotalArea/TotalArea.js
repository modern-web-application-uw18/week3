import React, { Component } from 'react';
import Proptypes from 'prop-types';

class TotalArea extends Component {
    
    calculateTotal = () => {
        //console.log('CalcTotal',this.props);
        const { items } = this.props;
        //this.forceUpdate();
        const total = items.reduce((runningTotal, item) => {
            const cost = parseFloat(item.cost);
            console.log('cost', item.cost);
            console.log('my items', items);
            console.log('runningtotal', runningTotal+cost);
            if (Number.isNaN(cost)) {
                return runningTotal;
            }
            //console.log('runningTotal+cost', runningTotal+cost);
            return runningTotal + cost;
        }, 0);
        console.log('total', total);
        return total;

    }

    render(){
        const { items } = this.props;

        return (
            <div>
                <strong>Shopping Cart</strong>
            <ul>
            {
             items.map((item) => {
                return <li>{item.name}: ${item.cost}</li>   
             })
                         
            }
            </ul>
            <br />
            <strong>Total: ${this.calculateTotal()}</strong>
            </div>
        )
    }
}

TotalArea.prototypes = {
    name: Proptypes.string,
    cost: Proptypes.number    
}

export default TotalArea;