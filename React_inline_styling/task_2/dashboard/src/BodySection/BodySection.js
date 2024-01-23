import React from "react";
import PropTypes from "prop-types";

class BodySection extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className="bodySection">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
};

BodySection.propTypes = {
  // children: PropTypes.node,
  title: PropTypes.string,
};

BodySection.defaultProps = {
  // children: [],
  title: "",
};

export default BodySection;
