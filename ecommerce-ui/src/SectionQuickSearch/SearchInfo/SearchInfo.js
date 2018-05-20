import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './SearchInfo.css';

export default class SearchInfo extends Component {

    render() {
      const { houseAmount, description } = this.props.search;
        return (
          <div className="quickSearch">
            <div className="title">
              {houseAmount >= 2000 ? '2000+' : houseAmount} airbnbs available
            </div>
            <div className="text">
              {description}
            </div>
          </div>
        );
    }
}

SearchInfo.propTypes = {
  search: PropTypes.shape({
    houseAmount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  })
}
