import React from 'react'
import PropTypes from 'prop-types'

class NotificationItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { type, value, html, markAsRead, id } = this.props
    if (value) {
      return (
        <li onClick={() => {markAsRead(id)}} data-notification-type={type}>{value}</li>
      )
    } else {
      return (
        <li onClick={() => {markAsRead(id)}} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      )
    }
  }
}


NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
      __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
}

export default NotificationItem
