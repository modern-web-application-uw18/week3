import React, { Component } from 'react';

import airbnbs from '../resources/airbnbs.json';
import articles from '../resources/articles.json';
import quickSearch from '../resources/quickSearch.json';
import navigation from '../resources/navigation.json';

import Navigation from '../Navigation/Navigation.js';

import SectionBrowse from '../SectionBrowse/SectionBrowse.js';
import SectionArticles from '../SectionArticles/SectionArticles.js';
import SectionQuickSearch from '../SectionQuickSearch/SectionQuickSearch.js';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

export default class Airbnb extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        myCart: []
      };
    }

    addToCart = () => {
      return (index) => {

      }
    }

    render() {
        return (
          <div>
            <nav>
              <Navigation navItems={navigation} />
            </nav>
            <main>
              <Router>
                <div>
                  <Route path="/shoppingCart" render={() => <ShoppingCart />} />
                  <Route path="/articles" render={() => <SectionArticles articles={articles} />} />
                  <Route path="/searches" render={() => <SectionQuickSearch quickSearch={quickSearch} />} />
                  <Route path="/" render={() => <SectionBrowse airbnbs={airbnbs} addtoCart={this.addToCart()} />} />
                </div>
              </Router>
            </main>
          </div>
        );
    }
}
