// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const calcFunc = require('./calculator.functions');


// --------------------------------------------------------------------------------
// Calculator Class
// --------------------------------------------------------------------------------

class Calculator {

  constructor() {
      this.last_answer = 0;
  }

  do_math(a, b, func) {
      return (this.last_answer = func(a, b));
  }

  add(a, b) {
      return do_math(a, b, calcFunc.add);
  }

  subtract(a, b) {
      return do_math(a, b, calcFunc.subtract);
  }

  multiply(a, b) {
      return do_math(a, b, calcFunc.multiply);
  }

  divide(a, b) {
      return do_math(a, b, calcFunc.divide);
  }

  maximum(a, b) {
      return do_math(a, b, calcFunc.maximum);
  }

  minimum(a, b) {
      return do_math(a, b, calcFunc.minimum);
  }
}


// --------------------------------------------------------------------------------
// Module Exports
// --------------------------------------------------------------------------------

module.exports = {
  Calculator: Calculator,
}