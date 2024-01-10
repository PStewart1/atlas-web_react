import React from "react";

function Login() {
  return (
    <React.Fragment>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email"></input>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" name="password"></input>
      <button>OK</button>
    </div>
    </React.Fragment>
  );
};

export default Login;
