import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from './Description';
import Payment from './Payment';
import Host from './Host';
import Rating from './Rating';
import './Home.css';

class Home extends Component {

    render() {

        const {
            title,
            houseType,
            image,
            location,
            payment,
            host,
            rating
        } = this.props.home;

        return (
            <div className="Home" >
                <div className="Home-image-container" >
                    <img src={image} alt="" />
                </div>
                <Description title={title} houseType={houseType} location={location} />
                <Payment payment={payment} />
                <Host host={host} rating={rating} />
                <button onClick={this.props.addToCart}
                    className={this.props.isInCart(this) ? 'Grey-button' : 'Green-button'}>{this.props.isInCart(this) ? 'Added' : 'Add to Cart'}</button>
            </div >
        );
    }
}

Home.propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string,
    location: PropTypes.instanceOf(Location),
    payment: PropTypes.instanceOf(Payment),
    host: PropTypes.instanceOf(Host),
    rating: PropTypes.instanceOf(Rating),
};

Home.defaultProps = {
    title: 'No title :(',
    houseType: 'No house type :(',
};

export default Home;
