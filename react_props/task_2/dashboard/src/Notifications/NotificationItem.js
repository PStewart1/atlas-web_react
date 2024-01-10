import React from 'react';

function NotificationItem ({ type, html, value }) {
  return (
    <>
      <li data-priority={type} dangerouslySetInnerHTML={html}>{value}</li>
      {/* {!html && <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>} */}
    </>
  )
}

export default NotificationItem;
