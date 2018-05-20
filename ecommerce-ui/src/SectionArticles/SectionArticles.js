import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.js';

export default class Articles extends Component {

    render() {
      const articles = this.props.articles;
      const newArticles = articles.map((article, index) => {
        return <Card article={article} title={article.title} image={article.image} key={index} index={index}/>
      });

        return (
          <section className="articles">
            <h2>Plan An Event</h2>
            {newArticles}
          </section>
        );
    }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired
}
