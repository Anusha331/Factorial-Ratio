const factorialNum = require("../utilities/factorial/index");
const ratioOfNum = require("../ratio/index.js");
const ratioAndFactorial = (num1, num2, num3) => {
  let factorial = factorialOfNumber(num3);
  let ratio = ratioOfTwoNumbers(num1, num2);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
