import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Host from '../Host/Host';
// import ReactRating from 'react-rating';

class Rating extends Component {

    render() {

        const {
            stars,
            reviews,
        } = this.props.rating;

        return ( <div> Rating: {this.props.rating.stars} &middot; Reviews: {this.props.rating.reviews} </div> );
    }
            
}

Rating.propTypes = {
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRquired
}

Rating.defaultProps = {
    stars: 3,
    reviews: 0
}
export default Rating;