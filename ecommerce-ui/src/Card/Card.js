import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import HouseInfo from '../SectionBrowse/HouseInfo/HouseInfo.js';
import ArticleInfo from '../SectionArticles/ArticleInfo/ArticleInfo.js';
import SearchInfo from '../SectionQuickSearch/SearchInfo/SearchInfo.js';

export default class Card extends Component {

    render() {
        return (
            <div className="card" key={this.props.index}>
              <div className="coverImage" style={{ background: `url('${this.props.image}') center / cover no-repeat` }}>{this.props.title && <span className="textOverlay">{this.props.title}</span>}</div>
              <div className="cardInfo">
                {this.props.place && <HouseInfo place={this.props.place} addToCart={this.props.addToCart}/>}
                {this.props.article && <ArticleInfo article={this.props.article} />}
                {this.props.search && <SearchInfo search={this.props.search} />}
              </div>
            </div>
        );
    }
}

Card.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string.isRequired,
  place: PropTypes.object,
  article: PropTypes.object,
  search: PropTypes.object,
  addToCart: PropTypes.func
}

Card.defaultProps = {
  image: 'test_image',
}
