import React from 'react'

function NotificationItem({ type, html, value }) {
  if (value) {
    return (
      <li data-notification-type={type}>{value}</li>
    )
  } else {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    )
  }
}

export default NotificationItem
