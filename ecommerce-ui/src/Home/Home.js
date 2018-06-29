import React, {Component} from 'react';
//import './Home.css';
import PropTypes from 'prop-types';
import Location from '../Location/Location';
import Payment from '../Payment/Payment';
import Host from '../Host/Host';
import Rating from '../Rating/Rating';
import ResidenceDescrip from '../ResidenceDescrip/ResidenceDescrip';
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
            rating, 
        } = this.props.home;

        return (
            <div className="Home-flex">
                <div className="Home-image-container">
                    <img src={image} alt="" />
                </div>
                
                <ResidenceDescrip houseType={houseType} location={location} />
                <div className="Bolded"> {title} </div >
                {/* <Location location={location} /> */}
                <Payment payment={payment} />
                <Host host={host} />
                <Rating rating={rating} />
                <button onClick={this.props.isInCart(this) ? null : this.props.addToCart}
                    className={this.props.isInCart(this) ? 'Home-Gray-button' : 'Home-Green-button'}>{this.props.isInCart(this) ? 'Added' : 'Add to Cart'}</button>
            </div>            
        )
    }
}

Home.propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string,
    location: PropTypes.instanceOf(Location),
    payment: PropTypes.instanceOf(Payment),
    host: PropTypes.instanceOf(Host),
    rating: PropTypes.instanceOf(Rating)
}

Home.defaultProps = {
    title: 'No title for home',
    houseType: 'No type given for residence'
}

export default Home;