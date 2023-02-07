import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
  render() {
    return (
      <>
        <div className="menuItem">
          Your notifications
        </div>

        {this.props.displayDrawer && (
        <div className="Notifications">
          <button style={{
              color: '#3a3a3a',
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              fontSize: '15px',
              position: 'absolute',
              right: '1em',
              top: '1em',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-label="Close" onClick={(e) => {console.log('Close button has been clicked');}}>
          <img src={closeIcon} alt="close icon"/>
          </button>
          { this.props.listNotifications.length === 0 ?
            (
              <p>No new notification for now</p>
            )
            :
            (
              <p>Here is the list of notifications</p>
            )
          }

          <ul style={{position: 'relativei'}}>
          { this.props.listNotifications.length > 0 &&
                this.props.listNotifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    value={notif.value}
                    type={notif.type}
                    html={notif.html}
                    markAsRead={this.markAsRead}
                    id={notif.id}
                  />
                ))
             }
          </ul>
          </div>
          )}

        </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
