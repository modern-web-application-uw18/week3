import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Cart.css';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.removeRoomAction = this.props.removeRoomAction.bind(this);
      }
    
    render() {
        let removeRoomAction = this.removeRoomAction;
        return (
            // <div className="Cart">
            //     <h2>{this.state.value}</h2>
            //     <button className="Cart____button--removeroom" onClick={this.decrement}>Remove Room</button>
            //     <button className="Cart__button--addroom" onClick={this.increment}>Add Room</button>
            // </div>
            <div class="Cart">
            <h1>Saved Rooms</h1>
            <ul>
            {this.props.rooms.map(function(room, index){
                return (<li key={ index }>{room.title}&nbsp;&nbsp;${room.payment.cost}&nbsp;&nbsp;<button type="button" onClick={() => removeRoomAction(room)}>Delete Room</button></li>);
              })}
            </ul>
            </div>
        );
    }
}

Cart.propTypes = {
    removeRoomAction: PropTypes.func,
    rooms: PropTypes.array
};

Cart.defaultProps = {
    rooms: []
};

export default Cart;