import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils.js";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";

function Notifications({ displayDrawer }) {
  return (
    <div className="notification-menu ">
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
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
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
        </ul>
      </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
