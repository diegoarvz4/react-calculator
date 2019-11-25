/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    // eslint-disable-next-line arrow-parens
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const displayValue = this.state.next ? this.state.next : this.state.total;
    return (
      <div id="app">
        <Display value={displayValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
