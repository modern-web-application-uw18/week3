import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './AddItem.css';

class AddItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      cost: 0
  };
}
    render() {

      console.log(this.state.cost);
        return (
            <div>Total: {this.state.cost}
            </div>
        )
    }
}

AddItem.propTypes = {
    onAddItemClick: PropTypes.func.isRequired
};

export default AddItem;


// initial try
// import React, { Component } from 'react';
//
// class AddItem extends Component {
//   render() {
//     console.log(this.props.content.payment);
//
//     return (
//       <button className='add' onClick={this.props.onAddItemClick}>Add to Cart</button>
//     )
//   }
// }
//
// export default AddItem;
