import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader && !textSecondCell) return (
    <>
      <tr>
        <th colSpan="2">{textFirstCell}</th>
      </tr>
    </>
  )
  else if (isHeader && textSecondCell) return (
    <>
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    </>
  )
  else return (
    <>
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    </>
  )
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "",
  textSecondCell: "",
};

export default CourseListRow;
