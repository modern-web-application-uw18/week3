import React, { Component } from 'react'

class Location extends Component {

  render() {
    const{
      title,
      houseType,
      image,
      location,
      payment,
      host,
      rating 
    } = this.props.airbandbs;
    
    console.log(this.props.airbandbs)
    
    return(

      <div className="location">
        <img src={image} alt={title} />
        <h2>{title} </h2>
        <p>{houseType} • {location.city}</p>
        <p>Host: {host.name} <br /> </p>
        <button className="btn">Add to Cart</button>
      </div>
    );
  }
}

export default Location;