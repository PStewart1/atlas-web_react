import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  if (value) {
    return ( <li data-priority={type}>{value}</li> );
  }
  return ( <li data-priority={type} dangerouslySetInnerHTML={html} /> );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: ''
};

export default NotificationItem;
