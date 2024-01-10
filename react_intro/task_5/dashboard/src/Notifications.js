import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils.js';

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{
        border: 0,
        background: 'white',
        position: 'absolute',
        right: '25px',
        top: '25px',
      }}
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')} 
        >
        <img src={closeIcon} height="15px" width="15" alt="close icon" />
        </button>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
    </div>
  );
};
