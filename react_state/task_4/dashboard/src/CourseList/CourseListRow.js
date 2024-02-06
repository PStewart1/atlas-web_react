import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';

const style = StyleSheet.create({
  tr: {
    backgroundColor: '#f5f5f5ab',
    textAlign: 'left',
  },
  th: {
    borderBottom: '2px solid gray',
    borderTop: '2px solid gray',
    textAlign: 'center',
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);
  
  const checkIt = () => {
    setChecked(!checked);
  };

  // const { first } = this.props
  if (isHeader && !textSecondCell) return (
    <>
      <tr className={css(style.th)}>
        <th colSpan="2">{textFirstCell}</th>
      </tr>
    </>
  )
  else if (isHeader && textSecondCell) return (
    <>
      <tr className={css(style.th)}>
        <th >{textFirstCell}</th>
        <th >{textSecondCell}</th>
      </tr>
    </>
  )
  else return (
    <>
      <tr className={css(style.tr, checked && style.rowChecked)}>
        <td > <input type="checkbox" onChange={checkIt}/> {textFirstCell}</td>
        <td >{textSecondCell}</td>
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
