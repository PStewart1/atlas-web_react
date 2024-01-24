import React from "react";
import { StyleSheet, css } from 'aphrodite';


function Login() {
  const style = StyleSheet.create({
    button: {
      '@media (max-width: 900px)': {
        width: '2rem',
        backgroundColor: 'white',
        border: '3px solid orange',
        borderRadius: '5px',
        padding: '3px 5px',
      },
    },
    emailPass: {
      marginLeft: '10px',
      border: '0',
    },
    form: {
      '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    label: {
      marginRight: '25px',
      '@media (max-width: 900px)': {
        // marginBottom: '10px',
      },
    },
  });

  return (
    <React.Fragment>
    <div className="login-form">
      <p>Login to access the full dashboard</p>
      <form className={`Login ${css(style.form)}`}>
        <label className={css(style.label)} htmlFor="email">Email: 
          <input className={css(style.emailPass)} type="email" id="email" name="email"></input>
        </label>
        <label htmlFor="password">Password:
          <input className={css(style.emailPass)} type="password" id="password" name="password"></input>
        </label>
        <input type="submit" value="OK" className={css(style.button)} />
      </form>
    </div>
    </React.Fragment>
  )
};

export default Login;
