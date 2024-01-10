import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js";
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
    <Notifications /> 
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
App.defaultProps = {
  isLoggedIn: false,
};

export default App;
