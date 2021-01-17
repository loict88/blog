import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';

const Title = () => {
  let title;
  const location = useLocation();
  switch (location.pathname) {
    case '/Angular':
      title = 'Angular';
      break;
    case '/React':
      title = 'React';
      break;
    case '/O’clock':
      title = 'OCLOCK';
      break;
    case '/Autre':
      title = 'Autre';
      break;
    default:
      title = 'Dev of';
      break;
  }
  return (
    <div className="title">{title}</div>
  );
};

export default Title;
