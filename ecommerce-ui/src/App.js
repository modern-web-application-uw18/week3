import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Room from './Room.js';
import airBnbs from './airbnbs.json';
import Cart from './Cart.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.addRoom = this.addRoom.bind(this);

    this.state = {
      rooms: []
    };
  }

  addRoom = (room) => {
    this.setState((prevState) => {
      let rooms = prevState.rooms;
      rooms.push(room)
      return { rooms: rooms };
    });
  }

  removeRoom = (room) => {
    this.setState((prevState) => {
      let rooms = prevState.rooms;
      let filteredRooms = rooms.filter(item => item.title !== room.title);
      return { rooms: filteredRooms };
    });
  }

  render() {

    let addRoom = this.addRoom;
    let removeRoom = this.removeRoom;

    return (
      <div className="App-container">
        <div className="App-body">
          {airBnbs.map(function (room, index) {
            return <Room room={room} type="room" key={index} addRoomAction={addRoom} />
          })}
        </div>
        <Cart rooms={this.state.rooms} removeRoomAction={removeRoom}/>
      </div>
    );
  }
}

export default App;
