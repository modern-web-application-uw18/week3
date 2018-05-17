import React, { Component } from 'react';
import './Room.css';
import PropTypes from 'prop-types';

class Room extends Component {

  constructor(props) {
    super(props);
    this.addRoomAction = this.props.addRoomAction.bind(this);
  }

  render() {
    const room = this.props.room;
    let addRoomAction = this.addRoomAction;
    return (
      <div className="Room" key>
        <header className="Room-title">{room.title}</header>
        <div className="Room-payment">${room.payment.cost} per night 
        <h3 className="Room-paymentdescription">{room.payment.description}</h3>
        </div>
        <h1 className="Room-type">{room.type}</h1>
        <h2 className="Room-description">{room.description}</h2>
         <div className="Room-imagecontaner">
          <img src={room.image} alt={room["title"]} />
          </div>
          <button type="button" id="AddRoom__button" onClick={() => addRoomAction(room)}>Add Room</button>
      </div>
    );
  }
}
  

Room.propTypes = {
    addRoomAction: PropTypes.func,
    room: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.string,
        payment: PropTypes.shape({
            cost: PropTypes.number,
            description: PropTypes.string
        })
      })
};

export default Room;
