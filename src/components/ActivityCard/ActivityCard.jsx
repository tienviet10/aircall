import React from 'react';
import './ActivityCard.css';
import { BsTelephoneFill } from 'react-icons/bs';

const ActivityCard = ({ phoneNum, description, time }) => {
  return (
    <div className="activity-card">
      <div className="activity-card__icon">
        <BsTelephoneFill size={20} color="green" />
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
