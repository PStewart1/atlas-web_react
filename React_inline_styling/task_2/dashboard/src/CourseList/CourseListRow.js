import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class CourseListRow extends React.Component {
  render() {
    const { isHeader, textFirstCell, textSecondCell, first } = this.props;
    const style = StyleSheet.create({
      tr: {
        borderBottom: isHeader ? '2px solid gray' : null,
        backgroundColor: isHeader ? '#f5f5f5ab' : '#deb5b545',
        textAlign: first ? 'center' : 'left',
      },
      th: {
        borderBottom: '2px solid gray',
      }
    });

  if (isHeader && !textSecondCell) return (
    <>
      <tr className={css(style.tr)}>
        <th classname={css(style.th)} colSpan="2">{textFirstCell}</th>
      </tr>
    </>
  )
  else if (isHeader && textSecondCell) return (
    <>
      <tr className={css(style.tr)}>
        <th classname={css(style.th)}>{textFirstCell}</th>
        <th classname={css(style.th)}>{textSecondCell}</th>
      </tr>
    </>
  )
  else return (
    <>
      <tr className={css(style.tr)}>
        <td classname={css(style.th)}>{textFirstCell}</td>
        <td classname={css(style.th)}>{textSecondCell}</td>
      </tr>
    </>
  )
}};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "",
  textSecondCell: "",
};

export default CourseListRow;
