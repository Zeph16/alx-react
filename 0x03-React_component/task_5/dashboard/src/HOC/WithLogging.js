import React from 'react'

const WithLogging = ({ WrappedComponent }) => {
  const wrappedName = (WrappedComponent) => {
    if (WrappedComponent.displayName) {
      return WrappedComponent.displayName
    } else if (WrappedComponent.name) {
      return WrappedComponent.name
    } else {
      return "Component"
    }
  }
  WithLogging.displayName = `WithLogging(${wrappedName(WrappedComponent)})`

  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${wrappedName(WrappedComponent)} is mounted`)
    }
    componentWillUnmount() {
      console.log(`Component ${wrappedName(WrappedComponent)} is going to unmount`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default WithLogging
