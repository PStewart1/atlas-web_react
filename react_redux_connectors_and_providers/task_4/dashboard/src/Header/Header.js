import logo from "../assets/holberton-logo.jpg";
import React from "react";
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from "../App/AppContext.js";
import { logout } from "../actions/uiActionCreators.js";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

    const { user, logout, isLoggedIn } = this.props;

    return (
      <React.Fragment>
      <header className={css(style.header)}>
        <img className={`App-logo ${css(style.logo)}`} src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      {isLoggedIn ? 
        <section id="logoutSection">
          <p>Welcome {user.email} (<span onClick={logout}> <b>logout</b> </span>)</p>
        </section>
      : null}
      </React.Fragment>
    );
  };
}

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
    isLoggedIn: state.get("isUserLoggedIn")
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
