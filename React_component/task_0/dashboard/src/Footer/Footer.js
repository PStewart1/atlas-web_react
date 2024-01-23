import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";

function Footer() {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};

export default Footer;