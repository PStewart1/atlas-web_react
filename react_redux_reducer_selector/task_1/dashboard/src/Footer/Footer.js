import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
import { AppContext } from "../App/AppContext.js";

function Footer() {
  const { user } = React.useContext(AppContext);

  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user.isLoggedIn && <a href="#">Contact us</a>}
    </div>
  );
};

export default Footer;
