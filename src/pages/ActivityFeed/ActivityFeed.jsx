import React, { Component } from 'react';
import './ActivityFeed.css';
import Feed from '../../components/Feed/Feed.jsx';
import Archive from '../../components/Archive/Archive.jsx';
import FeedArchiveTabs from '../../components/FeedArchiveTabs/FeedArchiveTabs.jsx';
import CallDetails from '../../components/CallDetails/CallDetails.jsx';

class ActivityFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'feed',
      phoneList: [
        {
          id: 2,
          phoneNum: '+1 555-987-6543',
          description: 'Made a call to Johnson',
          time: '2:15 PM',
          date: 'May 8, 2023',
        },
        {
          id: 3,
          phoneNum: '+1 555-123-4567',
          description: 'Made a call to Smith',
          time: '11:45 AM',
          date: 'May 8, 2023',
        },
        {
          id: 1,
          phoneNum: '+1 555-123-4567',
          description: 'Made a call to Jane',
          time: '10:30 AM',
          date: 'May 9, 2023',
        },
      ],
      archivePhoneList: [],
      isModalOpen: false,
      callDetails: {},
      isTabChanging: false,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleArchiveAll = this.handleArchiveAll.bind(this);
    this.handleUnarchive = this.handleUnarchive.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleArchiveOneCall = this.handleArchiveOneCall.bind(this);
    this.handleUnarchiveOneCall = this.handleUnarchiveOneCall.bind(this);
  }

  handleTabClick(tabName) {
    this.setState({ isTabChanging: true });
    setTimeout(() => {
      this.setState({ activeTab: tabName, isTabChanging: false });
    }, 400);
  }

  handleArchiveAll() {
    if (this.state.phoneList.length === 0) {
      return;
    }
    this.setState({
      archivePhoneList: [
        ...this.state.archivePhoneList,
        ...this.state.phoneList,
      ].sort((a, b) => new Date(b.date) - new Date(a.date)),
      phoneList: [],
    });
  }

  handleUnarchive() {
    if (this.state.archivePhoneList.length === 0) {
      return;
    }
    this.setState({
      archivePhoneList: [],
      phoneList: [...this.state.phoneList, ...this.state.archivePhoneList].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      ),
    });
  }

  handleDetailsClick(phoneNum, description, time, date, id) {
    this.setState({
      isModalOpen: true,
      callDetails: {
        selectedPhoneNum: phoneNum,
        selectedDescription: description,
        selectedTime: time,
        selectedDate: date,
        id: id,
      },
    });
  }

  handleArchiveOneCall(id) {
    const archiveCall = this.state.phoneList.find(
      (activity) => activity.id === id
    );

    const newPhoneList = this.state.phoneList.filter(
      (activity) => activity.id !== id
    );

    this.setState({
      isModalOpen: false,
      callDetails: {},
      phoneList: newPhoneList,
      archivePhoneList: [...this.state.archivePhoneList, archiveCall],
    });
  }

  handleUnarchiveOneCall(id) {
    console.log(this.state);
    const unarchiveCall = this.state.archivePhoneList.find(
      (activity) => activity.id === id
    );

    const newUnarchivePhoneListList = this.state.archivePhoneList.filter(
      (activity) => activity.id !== id
    );

    this.setState({
      isModalOpen: false,
      callDetails: {},
      archivePhoneList: newUnarchivePhoneListList,
      phoneList: [...this.state.phoneList, unarchiveCall],
    });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        {this.state.isModalOpen && (
          <CallDetails
            closeModal={this.closeModal}
            callDetails={this.state.callDetails}
            activeTab={this.state.activeTab}
            handleUnarchiveOneCall={this.handleUnarchiveOneCall}
            handleArchiveOneCall={this.handleArchiveOneCall}
          />
        )}
        <FeedArchiveTabs
          handleTabClick={this.handleTabClick}
          activeTab={this.state.activeTab}
        />
        <div
          className={`tab-content ${
            this.state.isTabChanging ? 'is-changing' : ''
          }`}
        >
          {this.state.activeTab === 'feed' && (
            <Feed
              phoneList={this.state.phoneList}
              handleArchiveAll={this.handleArchiveAll}
              handleDetailsClick={this.handleDetailsClick}
            />
          )}
          {this.state.activeTab === 'archive' && (
            <Archive
              archivePhoneList={this.state.archivePhoneList}
              handleUnarchive={this.handleUnarchive}
              handleDetailsClick={this.handleDetailsClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ActivityFeed;
