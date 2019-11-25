/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name,
    color,
    wide,
  } = props;
  const btnStyle = {
    backgroundColor: color,
    width: wide,
  };

  const handleClick = () => { props.clickHandler(name); };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="button " style={btnStyle} onClick={handleClick}>
      { name }
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: '25%',
};

export default Button;
