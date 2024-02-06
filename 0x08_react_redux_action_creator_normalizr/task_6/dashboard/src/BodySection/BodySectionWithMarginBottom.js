import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection.js";
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {

    const styles = StyleSheet.create({
      bodySectionWithMargin: {
        marginBottom: '40px',
      },
    });

    return (
      <div className={`bodySectionWithMargin ${css(styles.bodySectionWithMargin)}`}>
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
