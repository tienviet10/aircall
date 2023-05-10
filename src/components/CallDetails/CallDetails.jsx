import React from 'react';
import './CallDetails.css';

class CallDetails extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Call Details</h2>
            <span className="close" onClick={this.props.closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="call-details-row">
              <h3>Phone Number:</h3>
              <p className="call-details-value">
                {this.props.callDetails.selectedPhoneNum}
              </p>
            </div>
            <div className="call-details-row">
              <h3>Description:</h3>
              <p className="call-details-value">
                {this.props.callDetails.selectedDescription}
              </p>
            </div>
            <div className="call-details-row">
              <h3>Time:</h3>
              <p className="call-details-value">
                {this.props.callDetails.selectedTime}
              </p>
            </div>
            <div className="call-details-row">
              <h3>Date:</h3>
              <p className="call-details-value">
                {this.props.callDetails.selectedDate}
              </p>
            </div>
          </div>
          <div className="modal-archive-container">
            {this.props.activeTab === 'feed' && (
              <button
                className="modal-archive"
                onClick={() =>
                  this.props.handleArchiveOneCall(this.props.callDetails.id)
                }
              >
                Archive
              </button>
            )}
            {this.props.activeTab !== 'feed' && (
              <button
                className="modal-archive"
                onClick={() =>
                  this.props.handleUnarchiveOneCall(this.props.callDetails.id)
                }
              >
                Unarchive
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CallDetails;
