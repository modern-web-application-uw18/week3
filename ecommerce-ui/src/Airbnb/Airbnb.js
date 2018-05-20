import React, { Component } from 'react';

import airbnbs from '../resources/airbnbs.json';
import articles from '../resources/articles.json';
import quickSearch from '../resources/quickSearch.json';
import navigation from '../resources/navigation.json';

import Navigation from '../Navigation/Navigation.js';
import Card from '../Card/Card.js';

import SectionBrowse from '../SectionBrowse/SectionBrowse.js';
import SectionArticles from '../SectionArticles/SectionArticles.js';
import SectionQuickSearch from '../SectionQuickSearch/SectionQuickSearch.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';

import './Airbnb.css';

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

export default class Airbnb extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        myCartItems: [],
        noItems: 0
      };
    }

    /**
    * adds a new object to the myCartItems array
    * @param {object} obj - the object to save into the shopping cart
    * @return {object} the updated shopping cart with the new obj added.
    */
    addToCart = (obj) => {
      return () => {
          this.setState((prevState, props) => {
            let newCart = prevState.myCartItems; // save previous state AS newCart variable
            newCart.push(obj); // add new item to old shopping cart which makes it a NewCart =]
            return {  // return the new cart to save the state
              myCartItems: newCart,
              noItems: newCart.length
            }
          });
      }
    }

    showCart = () => {
      const cartModal = document.getElementById('myShoppingCart');
      cartModal.classList.remove('hide');
      cartModal.classList.add('show');
    }

    hideCart = () => {
      const cartModal = document.getElementById('myShoppingCart');
      cartModal.classList.remove('show');
      cartModal.classList.add('hide');
    }

    render() {
        const myCart = this.state.myCartItems;
        const myItems = myCart.map((place, index) => {
          return <Card place={place} image={place.image} key={index} index={index}/>
        });

        return (
          <div>
            <nav>
              <Navigation navItems={navigation} noItems={this.state.noItems} showCart={this.showCart}/>
            </nav>
            <main>
              <Router>
                <div>
                  <Route path="/articles" render={() => <SectionArticles articles={articles} />} />
                  <Route path="/searches" render={() => <SectionQuickSearch quickSearch={quickSearch} />} />
                  <Route path="/" render={() => <SectionBrowse airbnbs={airbnbs} addToCart={this.addToCart} />} />
                </div>
              </Router>


              <div id="myShoppingCart" className="modal hide">
                <div className="myCart">
                  <h2>Your Shopping Cart</h2>
                  <div className="myCartContents">
                    {myItems}
                    <div className="closeCart" onClick={this.hideCart}>
                      <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faCircle} inverse transform="shrink-6"/>
                        <FontAwesomeIcon icon={faTimesCircle} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
    }
}
