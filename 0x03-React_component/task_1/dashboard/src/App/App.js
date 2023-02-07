import React from "react";
import PropTypes from 'prop-types'
import './App.css';
import { getLatestNotification } from './../utils/utils.js'
import Header from "../Header/Header";
import CourseList from "./../CourseList/CourseList"
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleLogout)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleLogout)
  }

  handleLogout(e) {
    if(e.ctrlKey && e.key === 'h') {
      e.preventDefault()
      alert('Logging you out')
      this.props.logOut()
    }
  }

  render() {

    const listCourses = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 40,
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
      }
    ]
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ]
    return (
      <div className="App">
        <Notifications listNotifications={listNotifications}/>
        <Header />
        <div className="App-body">
          {this.props.isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
        </div>
        <Footer />
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

export default App;
