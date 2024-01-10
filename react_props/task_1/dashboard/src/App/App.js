import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.js";

function App() {
  return (
    <React.Fragment>
    <Notifications /> 
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
