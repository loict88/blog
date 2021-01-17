import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = ({ categories, activeZen, ZenMode }) => (
  <div className="header">
    <nav>
      {categories.map((currentCategorie) => (
        <NavLink
          to={currentCategorie.route}
          exact
          key={currentCategorie.label}
          className="header-li"
          activeClassName="header-li--active"
        >
          {currentCategorie.label}
        </NavLink>
      ))}
    </nav>
    <button onClick={activeZen} className="button" type="button">{ZenMode ? 'desactiver' : 'activer' }</button>
  </div>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  activeZen: PropTypes.func.isRequired,
  ZenMode: PropTypes.bool.isRequired,
};

export default Header;
