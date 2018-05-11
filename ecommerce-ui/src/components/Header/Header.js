import React, { Component } from 'react';
import classes from './Header.css';
import Cart from './Cart/Cart';
import NewListingModal from './NewListingModal/NewListingModal';

import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import MdAddBox from 'react-icons/lib/md/add-box';

class Header extends Component {
  state = {
    cartShow: false,
    formShow: false
  }

  handleCartClose = () => {
    this.setState({ cartShow: false });
  }

  handleCartShow = () => {
    this.setState({ cartShow: true });
  }


  handleFormClose  = () => {
    this.setState({ formShow: false });
  }

  handleFormShow  = () => {
    this.setState({ formShow: true });
  }

  render() {

    return (
      <div className={classes.Header}>

        <div>
          <button type="button" className="btn btn-danger" style={{ width: '150px', height: '40px', border: '0px' }} onClick={this.handleFormShow}>
            Add Listing &nbsp;&nbsp; <MdAddBox size={30} />
          </button>
        </div>

        <div style={{ textAlign: 'right' }}>
          <button type="button" className="btn btn-default" style={{ width: '150px', height: '40px', border: '0px' }} onClick={this.handleCartShow}>
            Checkout &nbsp;&nbsp; <MdShoppingCart size={30} />
          </button>
        </div>


        <Cart cartShow={this.state.cartShow}  handleCartClose={this.handleCartClose} cartContent={this.props.cartContent} removeListingFromTheCartHandler={this.props.removeListingFromTheCartHandler} />
        <NewListingModal formShow={this.state.formShow} handleFormClose={this.handleFormClose} dataHandler={this.props.dataHandler} mockDataArr={this.props.mockDataArr}/>


      </div>
    )
  }
}


export default Header;
