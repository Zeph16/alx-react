import React from "react";
import PropTypes from 'prop-types'
import './App.css';
import Header from "../Header/Header";
import CourseList from "./../CourseList/CourseList"
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Notifications />
      <Header />
      <div className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <Footer />
    </div>
  );
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
