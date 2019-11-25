/* eslint-disable radix */
// eslint-disable-next-line import/extensions
import { Big } from 'big.js/big.js';

const operate = (numOne, numTwo, operation) => {
  let total = '';

  if (operation === 'X') {
    total = Big(parseFloat(numOne) * parseFloat(numTwo));
  } else
  if (operation === '+') {
    total = Big(parseFloat(numOne) + parseFloat(numTwo));
  } else
  if (operation === '-') {
    total = Big(parseFloat(numOne) - parseFloat(numTwo));
  } else
  if (operation === '÷') {
    if (numTwo === '0') {
      return 'Error';
    }
    total = Big(parseFloat(numOne) / parseFloat(numTwo));
  } else
  if (operation === '%') {
    if (numTwo === '0') {
      return 'Error';
    }
    total = Big(parseFloat(numOne) % parseFloat(numTwo));
  }

  return total;
};

export default operate;
