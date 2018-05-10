import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';


const popover = (
    <Popover id="modal-popover" title="popover">
        very popover. such engagement
          </Popover>
);
const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;


const cart = (props) => (

    <Modal show={props.cartShow} onHide={props.handleCartClose}>
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
            <Button onClick={props.handleCartClose}>Close</Button>
        </Modal.Footer>
    </Modal>
)

export default cart;
