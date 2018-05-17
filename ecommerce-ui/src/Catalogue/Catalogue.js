import React, { Component } from 'react';
import Unit from '../Unit/Unit.js';
import PropTypes from 'prop-types';

class Catalogue extends Component {
    render() {        
        const units = this.props.inventory.map((unit, idx) => {
            return (
                <div className="Unit" key={idx}>
                    <Unit 
                        unit={unit}
                        onAddToCart={this.props.onAddToCart}
                    />
                </div>
            );
        });
        return (
            <div className="Catalogue"> {units} </div>
        );
    }
}

Catalogue.propTypes = {
    inventory: PropTypes.array,
    onAddToCart: PropTypes.func
}

export default Catalogue;