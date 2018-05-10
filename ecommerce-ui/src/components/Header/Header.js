import React, { Component } from 'react';
import classes from './Header.css';
import Cart from './Cart/Cart';
import AddListing from './AddListing/AddListing';




import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import MdAddBox from 'react-icons/lib/md/add-box';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleCartShow = this.handleCartShow.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);

    this.handleFormShow = this.handleFormShow.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);


    this.state = {
      cartShow: false,
      formShow: false
    };
  }

  handleCartClose() {
    this.setState({ cartShow: false });
  }

  handleCartShow() {
    this.setState({ cartShow: true });
  }


  handleFormClose() {
    this.setState({ formShow: false });
  }

  handleFormShow() {
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


        <Cart cartShow={this.state.cartShow}  handleCartClose={this.handleCartClose}/>
        <AddListing formShow={this.state.formShow} handleFormClose={this.handleFormClose}/>


      </div>
    )
  }
}


export default Header;
