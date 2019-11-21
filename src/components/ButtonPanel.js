import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    const btnGray = '#F5F5F5';
    return (
      <div id="buttonPanel">
        <div className="buttons-1">
          <Button name="AC" color={btnGray} />
          <Button name="+/-" color={btnGray} />
          <Button name="%" color={btnGray} />
          <Button name="÷" />
        </div>
        <div className="buttons-2">
          <Button name="7" color={btnGray} />
          <Button name="8" color={btnGray} />
          <Button name="9" color={btnGray} />
          <Button name="X" />
        </div>
        <div className="buttons-3">
          <Button name="4" color={btnGray} />
          <Button name="5" color={btnGray} />
          <Button name="6" color={btnGray} />
          <Button name="-" />
        </div>
        <div className="buttons-4">
          <Button name="1" color={btnGray} />
          <Button name="2" color={btnGray} />
          <Button name="3" color={btnGray} />
          <Button name="+" />
        </div>
        <div className="buttons-5">
          <Button name="0" color={btnGray} wide="50%" />
          <Button name="." color={btnGray} />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
