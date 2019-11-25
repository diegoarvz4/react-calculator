/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    const btnGray = '#F5F5F5';
    return (
      <div id="buttonPanel">
        <div className="buttons-1">
          <Button name="AC" color={btnGray} clickHandler={this.handleClick} />
          <Button name="+/-" color={btnGray} clickHandler={this.handleClick} />
          <Button name="%" color={btnGray} clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} />
        </div>
        <div className="buttons-2">
          <Button name="7" color={btnGray} clickHandler={this.handleClick} />
          <Button name="8" color={btnGray} clickHandler={this.handleClick} />
          <Button name="9" color={btnGray} clickHandler={this.handleClick} />
          <Button name="X" clickHandler={this.handleClick} />
        </div>
        <div className="buttons-3">
          <Button name="4" color={btnGray} clickHandler={this.handleClick} />
          <Button name="5" color={btnGray} clickHandler={this.handleClick} />
          <Button name="6" color={btnGray} clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} />
        </div>
        <div className="buttons-4">
          <Button name="1" color={btnGray} clickHandler={this.handleClick} />
          <Button name="2" color={btnGray} clickHandler={this.handleClick} />
          <Button name="3" color={btnGray} clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div className="buttons-5">
          <Button name="0" color={btnGray} wide="50%" clickHandler={this.handleClick} />
          <Button name="." color={btnGray} clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
