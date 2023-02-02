import React from 'react'
import PropTypes from 'prop-types'

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


NotificationItem.defaultProps = {
  type: "default",
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
      __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
}

export default NotificationItem
