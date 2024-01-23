import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
      const { id, type, html, value, markAsRead } = this.props;
    if (value) {
      return ( <li data-priority={type} onClick={() => markAsRead(id)} >{value}</li> );
    }
    return ( <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}/> );
}};

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string,
  markAsRead : PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead : () => {}
};

export default NotificationItem;
