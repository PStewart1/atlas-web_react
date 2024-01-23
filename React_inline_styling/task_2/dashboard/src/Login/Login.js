import React from "react";
import { StyleSheet, css } from 'aphrodite';


function Login() {
  const style = StyleSheet.create({
    label: {
      marginRight: "15px",
    },
    ep: {
      marginLeft: "8px",
    },
  });

  return (
    <React.Fragment>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label className={css(style.label)} htmlFor="email">Email: </label>
      <input className={css(style.ep)} type="email" id="email" name="email"></input>
      <label htmlFor="password">Password: </label>
      <input className={css(style.ep)} type="password" id="password" name="password"></input>
      <button>OK</button>
    </div>
    </React.Fragment>
  )
};

export default Login;
