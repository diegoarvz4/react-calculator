/* eslint-disable radix */
import operate from './operate';

const calculate = (calculator, buttonName) => {
  const calc = calculator;
  if (calc.total === 'Error') {
    calc.total = null;
  } else
  if (buttonName === '+/-') {
    if (calc.next != null) {
      calc.next = (parseFloat(calc.next) * -1).toString();
    } else
    if (calc.total != null) {
      calc.total = (parseFloat(calc.total) * -1).toString();
    }
  } else
  if (/[%÷X\-+]/.test(buttonName)) {
    if (calc.total && !calc.operation) {
      calc.operation = buttonName;
    } else
    if (calc.total && calc.operation && calc.next) {
      calc.total = operate(calc.total, calc.next, calc.operation);
      calc.next = null;
      calc.operation = buttonName;
    }
  } else
  if (/[0123456789]/.test(buttonName)) {
    if (calc.total && calc.operation && !calc.next) {
      calc.next = buttonName;
    } else
    if (calc.total && calc.operation && calc.next) {
      calc.next += buttonName;
    } else
    if (calc.total != null) {
      calc.total += buttonName;
    } else {
      calc.total = buttonName;
    }
  } else
  if (buttonName === 'AC') {
    calc.total = null;
    calc.next = null;
    calc.operation = null;
  } else
  if (buttonName === '.') {
    if (calc.total != null && calc.operation != null && calc.next != null) {
      if (!/\./.test(calc.next)) {
        calc.next += buttonName;
      }
    } else
    if (calc.total != null && calc.operation === null && calc.next === null) {
      if (!/\./.test(calc.total)) {
        calc.total += buttonName;
      }
    }
  } else
  if (buttonName === '=') {
    if (calc.total != null && calc.operation != null && calc.next != null) {
      calc.total = operate(calc.total, calc.next, calc.operation).toString();
      calc.next = null;
      calc.operation = null;
    }
  }
  return calc;
};

export default calculate;
