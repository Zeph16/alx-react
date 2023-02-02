import React from "react";
import './App.css';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

function App() {
  return (
    <div className="App">
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
