import React, { Component } from 'react';
import './ActivityFeed.css';
import Feed from '../../components/Feed/Feed.jsx';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'feed',
      phoneList: [
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
      ],
      archivePhoneList: [],
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabName) {
    this.setState({ activeTab: tabName });
  }

  render() {
    return (
      <div>
        <div className="tab-menu">
          <button
            className={`tab-item ${
              this.state.activeTab === 'feed' ? 'active' : ''
            }`}
            onClick={() => this.handleTabClick('feed')}
          >
            Feed
            {this.state.activeTab === 'feed' && <span className="underline" />}
          </button>
          <button
            className={`tab-item ${
              this.state.activeTab === 'archive' ? 'active' : ''
            }`}
            onClick={() => this.handleTabClick('archive')}
          >
            Archive
            {this.state.activeTab === 'archive' && (
              <span className="underline" />
            )}
          </button>
        </div>
        <div className="tab-content">
          {this.state.activeTab === 'feed' && (
            <Feed phoneList={this.state.phoneList} />
          )}
          {this.state.activeTab === 'archive' && (
            <div className="tab-pane active">This is the archive tab.</div>
          )}
        </div>
      </div>
    );
  }
}

export default ActivityFeed;
