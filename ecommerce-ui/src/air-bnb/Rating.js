import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';
import greenstar from '../img/green-star.png';
import graystar from '../img/gray-star.png';

class Rating extends Component {

    render() {

        const {
            stars,
            reviews
        } = this.props.rating;

        return (
            <span>{reviews} reviews &middot;
                <ReactRating fractions={2} initialRating={stars}
                placeholderSymbol={<img src={greenstar} alt=""/>} fullSymbol={<img src={greenstar} alt=""/>}
                emptySymbol={<img src={graystar} alt=""/>}/></span>
        );
    }
}

Rating.propTypes = {
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired
};

Rating.defaultProps = {
    stars: 3,
    reviews: 0
};

export default Rating;
