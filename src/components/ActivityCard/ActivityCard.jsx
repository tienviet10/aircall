import React from 'react';
import './ActivityCard.css';
import { AiFillPhone } from 'react-icons/ai';

const ActivityCard = ({ phoneNum, description, time }) => {
  return (
    <div className="activity-card">
      <div className="activity-card__icon">
        <AiFillPhone color="green" size={20} />
      </div>
      <div className="activity-card__content">
        <div className="activity-card__number">{phoneNum}</div>
        <div className="activity-card__description">{description}</div>
      </div>
      <div className="activity-card__time">{time}</div>
    </div>
  );
};

export default ActivityCard;
