import React, { Component } from 'react';
import './Rental.css';
// import Cart from './ShoppingCart';

class Rental extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            counter: 0
        };
    }

    addItem = ()  => {
        this.setState((prevState, props) => {
            const items = prevState.items;
            const item = prevState.counter;
            let newCount = item + 1;
            // alert('add an item', newCount);
            //add item to shopping cart
            if (item) {
                items.push(newCount);
                // alert('One item got added', item);
                // item++;
            } else {
                // alert('You should add an item');
            }

            return {
                item: items,
                counter: newCount
            };
        });
    }

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
                <button onClick={this.addItem} className="btn">Add To Cart</button>
                {/* <button onClick="" class="btn">Remove From Cart</button> */}
                <div className='image-position'>
                    <img src={image} className ='image-box' alt={image.toString()} />
                </div>

                <div className='property-info'>
                    <p className='rental-type'>
                    {houseType.toUpperCase()} - {location.city.toUpperCase()} </p>
                    <p className='rental-title'>{title.toUpperCase()}</p>
                    
                    <p className='rental-price'>
                    {'$' + payment.cost.toFixed(2) + ' per night'} 
                    {payment.description === "" ? payment.description : ' - ' + payment.description}</p>
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