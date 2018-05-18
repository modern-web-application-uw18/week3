import React, { Component } from 'react';
// import AddItem from './AddItem.js';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      cost: 0

  };

}

  addToCart = () => {
    // this.setState({ cost: this.state.cost + this.props.content.payment.cost });
    this.setState((prevState, props) => {
      const totalItems = prevState.items;
      totalItems.push(this.props.content);

      // console.log(this.props.content.payment.cost);
      // console.log(this.state.cost);


      return {
        items: totalItems,
        cost: this.state.cost + this.props.content.payment.cost
      };
    });
  }

  render() {
    // console.log(this.props.content);
    // console.log(this.props.content.image);
    console.log(this.state);
    // console.log(this.props);
    return (
      <div key={this.props.content.title} className='rental'>
        <img src={this.props.content.image} alt='stockImage'/>
        <div>
          <h5>{this.props.content.title}</h5>
          <p>Nightly rate: ${this.props.content.payment.cost}</p>
          {/*<AddItem onAddItemClick={this.addItem} />*/}
          <button onClick={this.addToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}

Card.PropTypes = {
  content: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
  title: Proptypes.string.isRequired,
  location: PropTypes.string
}

export default Card;
