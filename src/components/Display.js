import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { value } = props

  return (
    <div>{ value }</div>
  );
}

Display.propTypes = {
  value: PropTypes.string
};

export default Display;
