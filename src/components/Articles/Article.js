import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Article = ({ title, category, excerpt }) => (
  <article className="article">
    <h2 className="article-h2">{title}</h2>
    <p className="article-p1">{category}</p>
    <p className="article-p">{excerpt}</p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};
export default Article;
