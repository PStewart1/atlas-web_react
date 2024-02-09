import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
import { AppContext } from "../App/AppContext.js";
import { connect } from 'react-redux';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { user } = this.props;

    return (
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
        {user.isLoggedIn && <a href="#">Contact us</a>}
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
  };
};

export default connect(mapStateToProps)(Footer);
