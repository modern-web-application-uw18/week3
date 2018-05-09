import React, { Component } from 'react';
import classes from './Cart.css';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';

class Cart extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {

        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;




        return (
            <div className={classes.Cart}>
 
            
            <button type="button" className="btn btn-default" style={{width:'150px',height:'40px',border:'0px'}}  onClick={this.handleShow}>
            Checkout &nbsp;&nbsp; <MdShoppingCart size={30}/>
            </button>


    

            
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Text in a modal</h4>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
    
                <h4>Popover in a modal</h4>
                <p>
                  there is a{' '}
                  <OverlayTrigger overlay={popover}>
                    <a href="#popover">popover</a>
                  </OverlayTrigger>{' '}
                  here
                </p>
    
                <h4>Tooltips in a modal</h4>
                <p>
                  there is a{' '}
                  <OverlayTrigger overlay={tooltip}>
                    <a href="#tooltip">tooltip</a>
                  </OverlayTrigger>{' '}
                  here
                </p>
    
                <hr />
    
                <h4>Overflowing text to show scroll behavior</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros.
                </p>

              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
    }
}


export default Cart;
