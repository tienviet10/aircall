import React from 'react';
import './Feed.css';
import ActivityCard from '../ActivityCard/ActivityCard.jsx';

class Feed extends React.Component {
  render() {
    return (
      <div>
        <button className="archive-all-button">Archive All</button>
        <ul className="activity-feed">
          {this.props.phoneList.map((activity) => (
            <li key={activity.date}>
              <h3 className="activity-date">{activity.date}</h3>
              {activity.calls.map((call) => (
                <ActivityCard
                  key={call.phoneNum}
                  phoneNum={call.phoneNum}
                  description={call.description}
                  time={call.time}
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
