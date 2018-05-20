import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ArticleInfo.css';

export default class ArticleInfo extends Component {

    render() {
      const { description, experiences } = this.props.article;
        return (
          <div className="articleInfo">
            <div className="title">
              {experiences.amount}+ {experiences.type}
            </div>
            <div className="text">
              {description}
            </div>
          </div>
        );
    }
}

ArticleInfo.propTypes = {
  article: PropTypes.shape({
    description: PropTypes.string.isRequired
  }).isRequired,
  experiences: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired
}

ArticleInfo.defaultProps = {
  article: {
    description: ''
  },
  experiences: {
    amount: 0,
    type: 'experiences'
  }
}
