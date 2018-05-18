import React, { Component } from 'react';
import './Rental.css';

class Rental extends Component {
    render() {
        const {
            houseType,
            title,
            image, 
            payment,
            location,
            rating
        } = this.props.rental;

        const rating_stars = '*****';

        return (
            <div className='rental-property'>
                <div className='image-position'>
                    <img src={image} className ='image-box' alt={image.toString()} />
                </div>

                <div className='property-info'>
                    <p className='rental-type'>
                    {houseType.toUpperCase()} - {location.city.toUpperCase()} </p>
                    <p className='rental-title'>{title.toUpperCase()}</p>
                    
                    <p className='rental-price'>
                    {'$' + payment.cost.toFixed(2) + ' per night'} 
                    {payment.description == "" ? payment.description : ' - ' + payment.description}</p>
                    <p className='rental-price'>
                        {rating_stars.substring(0,rating.stars)}  { rating.reviews}
                    </p>
                </div>
               
            </div>
        );
    }
}




// const rating_stars = '*****';
// const Rental = ({rental: {houseType, title, image, payment, location, rating}}) => (
//     <div className='rental-property'>
//         <div className='image-position'>
//             <img src={image} className ='image-box' alt={image.toString()} />
//         </div>

//         <div className='property-info'>
//             <p className='rental-type'>
//             {houseType.toUpperCase()} - {location.city.toUpperCase()} </p>
//             <p className='rental-title'>{title.toUpperCase()}</p>
            
//             <p className='rental-price'>
//             {'$' + payment.cost.toFixed(2) + ' per night'} 
//             {payment.description == "" ? payment.description : ' - ' + payment.description}</p>
//             <p className='rental-price'>
//             {rating_stars.substring(0,rating.stars)}  { rating.reviews}
//             </p>
//         </div>
//     </div>
// );

export default Rental;