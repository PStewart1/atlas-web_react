import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
// import { getLatestNotification } from "../utils/utils.js";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape.js";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the new list is longer than the old list
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    
    const { displayDrawer, listNotifications } = this.props;
  return (
    <div className="notification-menu">
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
      <div className="Notifications">
        {listNotifications.length ? (
            <p>Here is the list of notifications</p>
          ) : (
            <p>No new notification for now</p>
          )}
        <button
          style={{
            border: 0,
            background: "white",
            position: "absolute",
            right: "25px",
            top: "25px",
          }}
          aria-label="Close"
          onClick={() => console.log("Close button has been clicked")}
        >
          <img src={closeIcon} height="15px" width="15" alt="close icon" />
        </button>
        <ul>
          {listNotifications.length === 0 ? (
            <NotificationItem value="No new notification for now" />
          ) : (
            listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={this.markAsRead}
              />
            ))
          )}
        </ul>
      </div>
      )}
    </div>
  );
}};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
