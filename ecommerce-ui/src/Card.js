import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const propTypes = {
	title: PropTypes.string, 
	image: PropTypes.string, 
	payment: PropTypes.object
};

export class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			cost: 0
		};
	}
	
	addListing = (e) => {
		const title = e.props.listing.title;
		const cost = e.props.listing.cost;
		this.setState((prevState, props) => {
			const title = prevState.title;
			const cost = prevState.cost;
			return {
				title: title,
				cost: cost
			};
		});
   }
	
	render() {		
		return (
		  <div className="flex-container">
				<div>
					<div className="grid-card-top">
						<img className="Card-img" src={this.props.listing.image} />
					</div>
					<div className="grid-card-bottom">
						<p className="Card-title">{this.props.listing.title}</p>
						<p>${this.props.listing.payment.cost}</p>
						<p>{this.props.listing.payment.description}</p>
						<button onClick={this.addListing}>Add Listing</button>
					</div>
				</div>
			</div>
		);	
	}
}

Card.propTypes = propTypes;

export default Card;
