import React from 'react';
import './BottomNavigation.css';
import { AiFillPhone } from 'react-icons/ai';

const BottomNavigation = () => {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav__item">
        <AiFillPhone />
      </div>
      <div className="bottom-nav__item">
        <AiFillPhone />
      </div>
      <div className="bottom-nav__item bottom-nav__item--large">
        <AiFillPhone />
      </div>
      <div className="bottom-nav__item">
        <AiFillPhone />
      </div>
      <div className="bottom-nav__item">
        <AiFillPhone />
      </div>
    </div>
  );
};

export default BottomNavigation;
