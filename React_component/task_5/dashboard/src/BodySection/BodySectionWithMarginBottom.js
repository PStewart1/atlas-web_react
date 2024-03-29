import React from "react";
import PropTypes from "prop-types";
import "./BodySectionWithMarginBottom.css";
import BodySection from "./BodySection.js";

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props}/>
      </div>
    );
  }
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

export default BodySectionWithMarginBottom;
