import React,{Component} from 'react';

import './SearchInfo.css';

export default class SearchInfo extends Component {

    render() {
      const { houseAmount, description } = this.props.search;
        return (
          <div className="quickSearch">
            <div className="title">
              {houseAmount} homes
            </div>
            <div className="text">
              {description}
            </div>
          </div>
        );
    }
}
