import React from 'react';
import './ActivityCard.css';
import { BsTelephoneFill } from 'react-icons/bs';

const ActivityCard = ({
  phoneNum,
  description,
  time,
  handleDetailsClick,
  date,
  id,
}) => {
  return (
    <div
      className="activity-card"
      onClick={() => handleDetailsClick(phoneNum, description, time, date, id)}
    >
      <div className="activity-card-icon">
        <BsTelephoneFill size={20} color="green" />
      </div>
      <div className="activity-card-content">
        <div className="activity-card-number">{phoneNum}</div>
        <div className="activity-card-description">{description}</div>
      </div>
      <div className="activity-card-time">{time}</div>
    </div>
  );
};

export default ActivityCard;
