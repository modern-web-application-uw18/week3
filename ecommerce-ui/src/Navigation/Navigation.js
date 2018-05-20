import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';

import './Navigation.css';

export default class Navigation extends Component {

    render() {
      const navigation = this.props.navItems.map((item, index) => {
        index += 1; // increment for logic purposes when viewing in the DOM e.g. first nav item will be [navLink_1] instead of [navLink_0]
        return <li key={`navItem_${index}`}><a key={`navLink_${index}`} href={item.url} id={`navLink_${index}`}>{item.text}</a></li>;
      })
        return (
            <ul className="nav">
                {navigation}
                <div className="shoppingCart" onClick={this.props.showCart} title="View Shopping Cart">
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="fa-layers-counter">{this.props.noItems}</span>
                  </span>
                </div>
            </ul>
        );
    }
}

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
  showCart: PropTypes.func.isRequired,
  noItems: PropTypes.number.isRequired
}

Navigation.defaultProps = {
  navItems: [{
    text: 'myHome',
    url: '#'
  }],
  showCart: () => {
    console.log('test show cart function');
  },
  noItems: 999
}
