import React from 'react';
import './Feed.css';
import ActivityCard from '../ActivityCard/ActivityCard.jsx';

const activities = [
  {
    date: 'May 9, 2023',
    calls: [
      {
        phoneNum: '+1 555-123-4567',
        description: 'Made a call to Jane',
        time: '10:30 AM',
      },
    ],
  },
  {
    date: 'May 8, 2023',
    calls: [
      {
        phoneNum: '+1 555-987-6543',
        description: 'Made a call to Johnson',
        time: '2:15 PM',
      },
      {
        phoneNum: '+1 555-123-4567',
        description: 'Made a call to Smith',
        time: '11:45 AM',
      },
    ],
  },
  // {
  //   date: 'May 7, 2023',
  //   calls: [
  //     {
  //       phoneNum: '+1 555-987-6543',
  //       description: 'Made a call to John Doe',
  //       time: '8:00 PM',
  //     },
  //   ],
  // },
];

class Feed extends React.Component {
  render() {
    return (
      <div>
        <button className="archive-all-button">Archive All</button>
        <ul className="activity-feed">
          {activities.map((activity) => (
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
