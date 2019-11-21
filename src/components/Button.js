import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, color, wide } = props;
  const btnStyle = {
    backgroundColor: color,
    width: wide,
  };
  return (
    <div className="button " style={btnStyle}>
      { name }
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
  wide: '25%',
};

export default Button;
