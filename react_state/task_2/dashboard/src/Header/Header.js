import logo from "../assets/holberton-logo.jpg";
import React from "react";
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from "../App/AppContext.js";

function Header() {
  const style = StyleSheet.create({
    header: {
      display: "flex",
      alignItems: "center",
      borderBottom: "solid #e1354b",
      width: "100%",
    },
    logo: {
      height: "240px",
      width: "240px",
    },
  });

  const { user, logOut } = React.useContext(AppContext);

  return (
    <React.Fragment>
    <header className={css(style.header)}>
      <img className={`App-logo ${css(style.logo)}`} src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </header>
    {user.isLoggedIn ? 
      <section id="logoutSection">
        <p>Welcome {user.email} (<span onClick={logOut}> <b>logout</b> </span>)</p>
      </section>
    : null}
    </React.Fragment>
  );
};

export default Header;
