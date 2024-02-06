import React, { useState } from "react";
import { StyleSheet, css } from 'aphrodite';

function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleChangeEmail = (em) => {
    setEmail(em);
    setEnableSubmit(email !== '' && password !== '');
  };

  const handleChangePassword = (pass) => {
    setPassword(pass);
    setEnableSubmit(email !== '' && password !== '');
  };

  return (
    <React.Fragment>
    <div className="login-form">
      <p>Login to access the full dashboard</p>
      <form className={`Login ${css(style.form)}`} onSubmit={handleLoginSubmit} >
        <label className={css(style.label)} htmlFor="email">Email: 
          <input className={css(style.emailPass)} 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => {handleChangeEmail(e.target.value)}}
            ></input>
        </label>
        <label htmlFor="password">Password:
          <input className={css(style.emailPass)} 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          onChange={(p) => {handleChangePassword(p.target.value)}}
          ></input>
        </label>
        <input type="submit" value="OK" className={css(style.button)} disabled={!enableSubmit}/>
      </form>
    </div>
    </React.Fragment>
  )
};

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
    },
  },
});

export default Login;
