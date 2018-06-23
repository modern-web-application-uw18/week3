import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import ReactRating from 'react-rating';

class Rating extends Component {

    render() {

        const {
            stars,
            reviews
        } = this.props.rating;

        return ( 
            <div> Rating: {this.props.rating.stars} Reviews: {this.props.rating.reviews} </div>)
    };
}

Rating.PropTypes = {
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRquired
}

Rating.defaultProps = {
    stars: 3,
    reviews: 0
}
export default Rating;