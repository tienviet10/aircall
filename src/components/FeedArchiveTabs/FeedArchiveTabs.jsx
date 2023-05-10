import React from 'react';
import './FeedArchiveTabs.css';

class FeedArchiveTabs extends React.Component {
  render() {
    return (
      <div className="tab-menu">
        <button
          className={`tab-item ${
            this.props.activeTab === 'feed' ? 'active' : ''
          }`}
          onClick={() => this.props.handleTabClick('feed')}
        >
          Feed
          {this.props.activeTab === 'feed' && <span className="underline" />}
        </button>
        <button
          className={`tab-item ${
            this.props.activeTab === 'archive' ? 'active' : ''
          }`}
          onClick={() => this.props.handleTabClick('archive')}
        >
          Archive
          {this.props.activeTab === 'archive' && <span className="underline" />}
        </button>
      </div>
    );
  }
}

export default FeedArchiveTabs;
