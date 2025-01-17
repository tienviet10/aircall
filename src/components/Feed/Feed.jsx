import React from 'react';
import './Feed.css';
import ActivityCard from '../ActivityCard/ActivityCard.jsx';

class Feed extends React.Component {
  render() {
    const phoneList = this.props.phoneList;
    const formattedPhoneObject = {};
    for (let i = 0; i < phoneList.length; i++) {
      if (phoneList[i].date in formattedPhoneObject) {
        formattedPhoneObject[phoneList[i].date].calls.push(phoneList[i]);
      } else {
        formattedPhoneObject[phoneList[i].date] = {
          date: phoneList[i].date,
          calls: [phoneList[i]],
        };
      }
    }
    const formattedPhoneList = Object.values(formattedPhoneObject);
    return (
      <div>
        <button
          className="archive-all-button"
          onClick={this.props.handleArchiveAll}
        >
          Archive All
        </button>
        <ul className="activity-feed">
          {formattedPhoneList.map((activity) => (
            <li key={activity.date}>
              <h3 className="activity-date">{activity.date}</h3>
              {activity.calls.map((call) => (
                <ActivityCard
                  key={call.phoneNum}
                  phoneNum={call.phoneNum}
                  description={call.description}
                  time={call.time}
                  handleDetailsClick={this.props.handleDetailsClick}
                  date={activity.date}
                  id={call.id}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Feed;
