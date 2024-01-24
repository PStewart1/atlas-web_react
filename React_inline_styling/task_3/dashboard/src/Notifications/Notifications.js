import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape.js";
import { StyleSheet, css } from 'aphrodite';


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
    const styles = StyleSheet.create({
      menuItem: {
        display: displayDrawer ? 'none' : 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        marginRight: '1rem',
      },
      noteBox: {
        border: '1px red dashed',
        padding: '1rem',
        margin: '1rem',
        // if displayDrawer is true 900 Media Query
        '@media (max-width: 900px)': {
          border: 'none',
          padding: '0',
          margin: '0',
          width: displayDrawer ? '1000vw' : '0vw',
          height: displayDrawer ? '1000vw' : '0vw',
          position: 'absolute',
          backgroundColor: 'white',
          // zIndex: '1',
        },
      },
      button: {
        display: 'flex',
        border: 0,
        background: "white",
        position: "absolute",
        right: "35px",
        top: "50px",
        zIndex: '1',
      },
    });

  return (
    <div className={`Notfication-menu `}>
      <div className={`menuItem ${css(styles.menuItem)}`}>Your notifications</div>
      {displayDrawer && (
      <div className={`Notifications ${css(styles.noteBox)}`}>
        {listNotifications.length ? (
            <p>Here is the list of notifications</p>
          ) : (
            <p>No new notification for now</p>
          )
        }
        
          {listNotifications ? (
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
          ) : (
            <tr>No course available yet</tr>
          )}
        
        <button className={`button ${css(styles.button)}`}
          aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
            <img src={closeIcon} height="15px" width="15" alt="close icon" />
        </button>
        
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
