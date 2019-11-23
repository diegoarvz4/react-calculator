import operate from './operate';

const calculate = (calculator, buttonName) => {
  const calc = calculator;
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
    if (calc.total) {
      calc.total += buttonName;
    } else {
      calc.total = buttonName;
    }
  } else
  if (buttonName === '+/-') {
    if (calc.next) {
      calc.next *= -1;
    } else
    if (calc.total) {
      calc.total *= -1;
    }
  } else
  if (buttonName === 'AC') {
    calc.total = null;
    calc.next = null;
    calc.operation = null;
  } else
  if (buttonName === '.') {
    if (calc.total && calc.operation && calc.next) {
      if (!/./.test(calc.next)) {
        calc.next += buttonName;
      }
    } else
    if (calc.total && !calc.operation && !calc.next) {
      if (!/./.test(calc.next)) {
        calc.total += buttonName;
      }
    }
  } else
  if (buttonName === '=') {
    if (calc.total && calc.operate && calc.next) {
      calc.total = operate(calc.total, calc.next, buttonName);
      calc.next = null;
      calc.operation = null;
    }
  }

  return calc;
};

export default calculate;
