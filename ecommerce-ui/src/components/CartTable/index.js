import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  td, th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  tr:nth-child(even) {
    background: #ddd;
  }

  button {
    margin-top: 8px;
  }
`;

const CartTable = ({ cart }) => (
  <Wrapper>
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Item Price</th>
        <th>Item Quantity</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {cart.items.map(item => (
        <tr key={item.productId}>
        <td>{item.product.title}</td>
        <td className="paymentCost">{item.product.payment.cost}</td>
        <td>{item.quantity}</td>
        <button>Remove</button>
        </tr>
      ))}
      <tr>
        <td>Total</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </Wrapper>
);

CartTable.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        payment: PropTypes.number.isRequired,
      }).isRequired,
      productId: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default CartTable;