/* eslint-disable radix */
import { Big } from 'big.js';

const operate = (numOne, numTwo, operation) => {
  let total = '';

  if (operation === 'X') {
    total = Big(parseInt(numOne) * parseInt(numTwo));
  } else
  if (operation === '+') {
    total = Big(parseInt(numOne) + parseInt(numTwo));
  } else
  if (operation === '-') {
    total = Big(parseInt(numOne) - parseInt(numTwo));
  } else
  if (operation === '÷') {
    total = Big(parseInt(numOne) / parseInt(numTwo));
  } else
  if (operation === '%') {
    total = Big(parseInt(numOne) % parseInt(numTwo));
  }

  return total;
};

export default operate;
