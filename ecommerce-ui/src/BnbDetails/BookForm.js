import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

class BookForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const purchase = {
      title: this.props.bnb.title,
      houseType: this.props.bnb.houseType,
      image: this.props.bnb.image,
      city: this.props.bnb.location.city,
      country: this.props.bnb.location.country,
      paymentCost: this.props.bnb.payment.cost,
      paymentDescription: this.props.bnb.payment.description,
      stay: this.state.value
    };
    this.props.addItemToCart(purchase);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="book-form">
        <label>
          <span>When do you want to stay?</span>
          <input type="date" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add to Cart" />
      </form>
    );
  }
}

export default BookForm;

BookForm.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string
  }),
  payment: PropTypes.object,
  payment: PropTypes.shape({
    cost: PropTypes.number,
    description: PropTypes.string
  })
};
