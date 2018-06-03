import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import './CardStyle.css';


class Card extends Component{  
     
    Superhost(props){
        const isSuperhost = this.props.card.host.isSuperhost;
         if(isSuperhost){
             return <p className='Superhost'>*Superhost</p>;
         } 
    }
    
    render(){
     
        return(
      <div className='Card-container'>   
           <div className='Card-img'>
                <img className = 'theImage' 
                        alt='staging'  
                        src={this.props.card.image}/>       
            </div>
            
            <div className='House-type-city-title'>
                <div className='Card-housetype'>
                    {this.props.card.houseType}
                        * 
                    {this.props.card.location.city}
                </div>
                    <div className='Card-title'>
                    {this.props.card.title}
                    </div> 
            </div>        
            <div className='Card-payment'>${this.props.card.payment.cost} per night * {this.props.card.payment.description} 
            </div> {/*end card payment  */}
            <div className='Card-rating'>
                 <StarRatings className='Stars' 
                    rating={this.props.card.rating.stars} 
                    starRatedColor='blue' 
                    numberOfStars={5}
                    starDimension='15px'
                    starSpacing="0.5px" 
                 /> 
                 
               <div className='Number-reviews'> 
               <div className='reviews'>{this.props.card.rating.reviews}</div>
               {this.Superhost(this.props.card.host.isSuperhost)}
               </div> 
            </div> {/*end card rating */} 
       </div>
        );
    }

}


Card.propTypes = {
    card: PropTypes.shape({  
        title: PropTypes.string,
        houseType: PropTypes.string,
        image: PropTypes.string,
        location: PropTypes.shape({
            city: PropTypes.string,
            country:PropTypes.string
        }),
        payment: PropTypes.shape({
            cost: PropTypes.number,
            description: PropTypes.string
        }),
        host: PropTypes.shape({
            name: PropTypes.string,
            isSuperhost: PropTypes.bool
        }),
        rating: PropTypes.shape({
            stars: PropTypes.number,
            reviews: PropTypes.number
        })
    })
};


export default Card;