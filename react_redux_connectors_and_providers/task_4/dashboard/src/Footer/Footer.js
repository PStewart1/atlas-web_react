import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
import { AppContext } from "../App/AppContext.js";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { user, isLoggedIn } = this.props;

    return (
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
        {isLoggedIn && <a href="#">Contact us</a>}
      </div>
    );
  }
};

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

export const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
    isLoggedIn: state.get("isUserLoggedIn")
  };
};

export default connect(mapStateToProps, null)(Footer);
