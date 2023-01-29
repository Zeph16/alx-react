import React from 'react';
import { getLatestNotification } from '../utils/utils.js';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">
          New course available
        </li>
        <li data-priority="urgent">
          New resume available
        </li>
        <li 
          data-priority="urgent"
          dangerouslySetInnerHTML={{__html: getLatestNotification()}}
        />
      </ul>
      <button style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '10px',
        right: '10px',
        float: 'right',
        background: 'none',
        border: 'none'
      }}
      aria-label="Close"
      onClick={() => {
        console.log('Close button has been clicked');
      }}
      >
        <img src={closeIcon} alt="close"/>
      </button>
    </div>
  );
}

export default Notifications;
