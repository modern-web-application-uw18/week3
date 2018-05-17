import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RentCard extends Component {  
    // buttonClicked(id) {
    //         console.log(id); //works
    // }
    render() {
            return (
                this.props.data.map((item, id) => {
                    //console.log(item); //works
                    //console.log(item.id);
                    return (
                        <div className='container' key={id}>
                            <a href={item.title}><img src={item.image} className='img' alt='Default article view'></img></a>
                            <div className='.rentalCard'>
                                <a href={item.link}><p className='title'>{item.title}</p></a>
                                <p className='fontMedium'>Cost: ${item.payment.cost}</p>
                                {/* <button className='addToCart' onClick={item.onAddRentalClick}>ADD TO CART</button> */}


                                {/* <button className='addToCart' onClick={() => this.buttonClicked(item.payment.cost)}>ADD TO CART</button>  */} 


                                {/* <button className='addToCart' onClick={this.props.addRental}>ADD TO CART</button>  */}

                                <button className='addToCart' onClick={(item) => this.props.addRental}>ADD TO CART</button>  
                            </div>
                        </div>
                )})
            )
        }
    }

RentCard.propTypes = {
    addRental: PropTypes.func,
    onClick: PropTypes.func
}

export default RentCard;

//onClick={() => this.handleClick()}
