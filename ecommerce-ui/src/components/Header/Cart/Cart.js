import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import PropTypes from 'prop-types';



const cart = (props) => (
    

    <Modal show={props.cartShow} onHide={props.handleCartClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>


   

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Title</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>


                    {props.cartContent.map((item, idx) => {
                        return (
                        <tr key={idx}>
                            <td><MdHighlightRemove style={{color:'red'}} onClick={()=>props.removeListingFromTheCartHandler(item)}/></td>
                            <td>{item.title}</td>
                            <td>{item.location.city}</td>
                            <td>{item.location.country}</td>
                            <td>$ {item.payment.cost}</td>
                        
                        </tr>)
                    })}

                    <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td><b>Total</b></td>
                        <td>$ {props.cartContent.reduce((sum,value) => sum+value.payment.cost, 0)}</td>
                    </tr>


                </tbody>
            </table>


        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.handleCartClose}>Close</Button>
        </Modal.Footer>
    </Modal>
)


cart.propTypes = {
    cartShow: PropTypes.bool.isRequired,
    handleCartClose: PropTypes.func.isRequired,
    cartContent: PropTypes.array.isRequired,
    removeListingFromTheCartHandler: PropTypes.func.isRequired
}


export default cart;
