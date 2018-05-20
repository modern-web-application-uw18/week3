import React,{Component} from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faStarHalf from '@fortawesome/fontawesome-free-solid/faStarHalf';

import './HouseInfo.css';

export default class HouseInfo extends Component {

    render() {
      /**
      * Render font awesome stars
      */
      const createStars = (num) => {
        let stars = [];
        let y = 0;
        // check if the rating is a whole number
        if (num % 1 !== 0) {
          num -= 1;
          stars.push(<FontAwesomeIcon icon={faStarHalf} key={y} />);
        }

        for(; y < num; y += 1) {
          stars.unshift(<FontAwesomeIcon icon={faStar} key={y+1} />);
        }

        return stars;
      }

      const { houseType, location, title, payment, rating, host } = this.props.place;

        return (
          <div className="houseInfo">
            <div className="location">{houseType} - {location.country}</div>
            <div className="title">
              {title}
            </div>
            <div className="text">
              ${payment.cost} {payment.description &&
                <span>- <span className="payDescription">{payment.description}</span></span>}
            </div>
            <div>
              {rating.stars &&
                createStars(rating.stars)} - {rating.reviews} reviews {host.isSuperhost && ` - Superhost`}
            </div>
              {this.props.addToCart &&
                <div className="addToCart" onClick={this.props.addToCart(this.props.place)}>+ Add to Cart</div>}
              {this.props.removeFromCart &&
                <div className="removeFromCart" onClick={this.props.removeFromCart(this.props.place)}>+ Remove from Cart</div>}
          </div>
        );
    }
}

HouseInfo.propTypes = {
  place: PropTypes.shape({
    houseType: PropTypes.string,
    location: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string
    }),
    title: PropTypes.string,
    payment: PropTypes.shape({
      cost: PropTypes.number,
      description: PropTypes.string
    }),
    rating: PropTypes.shape({
      stars: PropTypes.number,
      review: PropTypes.number
    }),
    host: PropTypes.shape({
      isSuperHost: PropTypes.bool
    })
  })
}
