import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader && !textSecondCell) return (
    <>
      <tr style={headerStyle} >
        <th className='th' colSpan="2">{textFirstCell}</th>
      </tr>
    </>
  )
  else if (isHeader && textSecondCell) return (
    <>
      <tr style={headerStyle}>
        <th className='th'>{textFirstCell}</th>
        <th className='th'>{textSecondCell}</th>
      </tr>
    </>
  )
  else return (
    <>
      <tr style={rowStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    </>
  )
};

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
