import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import airbnbData from './airbnbData/airbnbData.json';
import ShoppingCart from './shoppingCart/shoppingCart';
import airbnb from './Images/airbnb.png';
import amsterdam from './Images/amsterdam.jpeg';

//Was able to add to cart, but cannot remove from the cart. Week 3 (1hr in) on To do list should help.

/*import{
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';*/

//If you need to create a function in a component that adds something on click
//look week 2 2:19
//2.30 state

//week3 1 hr in adding items to to do list


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      bookedRentals: [],
      allRentals: airbnbData.map(x=>x),
      totalCost: 0
    };
  }
  
  
 activateCart(bookedRental){
    this.setState((prevState, props) =>{ 
        const bookedRentals = prevState.bookedRentals;
        bookedRentals.push(bookedRental); 
        const newTotal = prevState.totalCost + bookedRental.payment.cost
        return{
          bookedRentals : bookedRentals,
          totalCost: newTotal
      };
     });
    }

    removeRental(removedRental,idx){
      this.setState((prevState,props)=> {
        const prevbookedRentals = prevState.bookedRentals;
        prevbookedRentals.splice(idx,1)
        const newTotal = prevState.totalCost - removedRental.payment.cost
        return{
          bookedRentals : prevbookedRentals,
          totalCost: newTotal
        };
      });
    }

    showCart(){

    }

  render() { 
    return (
      <div className="App">
          <div className='logo-Cart'>
            <img src={airbnb} alt='Airbnb' />
            <div className='Cart-Container'> 
            <div className='Cart-title'> Shopping Cart</div>
            {this.state.bookedRentals.map((bookedRental,idx)=> {
              return(
                 <div className='Cart-line-Item'>
                    <ShoppingCart key={idx} bookedRental={bookedRental}/> 
                        <button className='Remove-button' onClick ={()=> this.removeRental(bookedRental,idx)}>Remove Rental</button>
                </div>
                  )
              })}
            <div>          
              <p className='Cart-total'>Total = ${this.state.totalCost} </p>
            </div>  
              </div > {/*end shopping Cart Container  */}
              </div>{/* end logo-cart flexbox*/}

            <div className='Airbnb-header'>
                <div className='Website-Header'>Explore Airbnb</div>
                <img className='Amsterdam-picture' src={amsterdam} alt='amsterdam' />
             </div> 

              <div className='Air-bnb-homes'>Homes around the world</div> 
            
            <div className='rentalsBody'>  
            {this.state.allRentals.map((card, idx) =>{  
                return (
                  <div className='CardAndButton'>
                  <Card key={idx} card = {card}/>   
                  <button className='Cart-Button' onClick ={()=>this.activateCart(card)}>Book Rental</button>
                </div>
               
           );
        })}
        </div> 

      </div>
    );
  }
}

export default App;
