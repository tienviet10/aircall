import React from 'react';
import './Archive.css';
import ActivityCard from '../ActivityCard/ActivityCard.jsx';

class Archive extends React.Component {
  render() {
    const archivePhoneList = this.props.archivePhoneList;
    const formattedPhoneObject = {};
    for (let i = 0; i < archivePhoneList.length; i++) {
      if (archivePhoneList[i].date in formattedPhoneObject) {
        formattedPhoneObject[archivePhoneList[i].date].calls.push(
          archivePhoneList[i]
        );
      } else {
        formattedPhoneObject[archivePhoneList[i].date] = {
          date: archivePhoneList[i].date,
          calls: [archivePhoneList[i]],
        };
      }
    }

    const formattedPhoneList = Object.values(formattedPhoneObject);
    return (
      <div>
        <button
          className="archive-all-button"
          onClick={this.props.handleUnarchive}
        >
          Unarchive All
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

export default Archive;
