import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import HouseInfo from '../SectionBrowse/HouseInfo/HouseInfo.js';
import ArticleInfo from '../SectionArticles/ArticleInfo/ArticleInfo.js';
import SearchInfo from '../SectionQuickSearch/SearchInfo/SearchInfo.js';

export default class Card extends Component {

    /**
    * Will return the appropriate card content depending on the props
    * @return {object} the component call that will set up the card content
    */
    cardInfoContent = () => {
      let cardInfo;

      // switch statement to find the first true statement
      switch(true) {
        case (this.props.place !== undefined):
            // detect what version of the airbnb card to show depending on the function passed as props.
            cardInfo = this.props.addToCart ? (
              <HouseInfo place={this.props.place} addToCart={this.props.addToCart}/>
            ) : (
              <HouseInfo place={this.props.place} removeFromCart={this.props.removeFromCart}/>
            )
            break;
        case (this.props.article !== undefined):
          cardInfo = <ArticleInfo article={this.props.article} />;
          break;
        case (this.props.search !== undefined):
          cardInfo = <SearchInfo search={this.props.search} />;
          break;
        default:
          // do nothing
      }
      return cardInfo;
    }

    render() {
        return (
            <div className="card" key={this.props.index}>
              <div className="coverImage" style={{ background: `url('${this.props.image}') center / cover no-repeat` }}>
                {this.props.title && <span className="textOverlay">{this.props.title}</span>}
              </div>
              <div className="cardInfo">
                {this.cardInfoContent()}
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
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func
}

Card.defaultProps = {
  image: 'test_image'
}
