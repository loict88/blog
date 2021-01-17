import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Article from './Article';
import './style.scss';

const Articles = ({ postsData, ZenMode }) => (
  <div className="mainarticle">
    <div className={classnames('mainarticle-list', { 'mainarticle-list--zen': ZenMode })}>
      {postsData.map((CurrentPost) => (
        <Article key={CurrentPost.id} {...CurrentPost} />
      ))}
    </div>
  </div>
);

Articles.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  ZenMode: PropTypes.bool.isRequired,
};
export default Articles;
