import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      { name }
    </div>
  );
}

Button.defaultProps = {
  name: "0",
};


Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
