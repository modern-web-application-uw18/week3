import React, { Component } from 'react';

class RentCard extends Component { 
    render() {
            return (
                this.props.data.map((item, id) => {
                    return (
                        <div className='container' key={id}>
                            <a href={item.title}><img src={item.image} 
                                className='img' alt='Default article view'></img>
                            </a>
                            <div className='.rentalCard'>
                                <a href={item.link}>
                                    <p className='title'>{item.title}</p>
                                </a>
                                <p className='fontMedium'>Cost: ${item.payment.cost}</p>
                                <button className='addToCart' 
                                    onClick={() => 
                                        this.props.addRental(item.title, item.payment.cost)}>ADD TO CART
                                </button>
                            </div>
                        </div>
                )})
            )
        }
    }



export default RentCard;
