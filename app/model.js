class Model {
  #OPERATIONS = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    x: (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
    '%': (num1, num2) => num1 % num2,
  };

  constructor() {
    this.tokens = [];
    this.entry = 0;
    this.resultSoFar = 0;
    this.newEntry = false;
    this.lastEntryDecimal = false;
  }

  lastToken() {
    return this.tokens[this.tokens.length - 1];
  }

  calculateNextResult() {
    if (this.tokens.length) {
      this.resultSoFar = this.#OPERATIONS[this.lastToken()](
        this.resultSoFar,
        this.entry
      );
    } else {
      this.resultSoFar = this.entry;
    }
  }

  // Create dispatchers on changes
  bindEntryChange(callback) {
    this.dispatchEntryChange = () => callback(this.entry);
  }

  bindOperationChange(callback) {
    this.dispatchOperationChange = () => callback(this.tokens);
  }

  bindDecimal(callback) {
    this.dispatchDecimal = () => callback(this.entry);
  }

  inputDigit(digitString) {
    if (this.lastEntryDecimal) {
      this.entry = parseFloat(this.entry.toString() + '.' + digitString);
      this.lastEntryDecimal = false;
    } else if (this.entry === 0 || this.newEntry) {
      this.entry = parseFloat(digitString, 10);
      this.newEntry = false;
    } else {
      this.entry = parseFloat(this.entry.toString() + digitString);
    }

    this.dispatchEntryChange();
  }

  clearEntry() {
    this.entry = 0;
    this.dispatchEntryChange();
  }

  clear() {
    this.entry = 0;
    this.tokens = [];
    this.resultSoFar = 0;
    this.dispatchEntryChange();
    this.dispatchOperationChange();
  }

  runOperator(operator) {
    this.calculateNextResult();
    this.tokens.push(this.entry);
    this.tokens.push(operator);

    this.entry = this.resultSoFar;
    this.newEntry = true;

    this.dispatchEntryChange();
    this.dispatchOperationChange();
  }

  negate() {
    this.entry = -this.entry;
    this.dispatchEntryChange();
  }

  addDecimal() {
    this.lastEntryDecimal = true;
    this.dispatchDecimal();
  }

  getFinalResult() {
    this.calculateNextResult();

    this.entry = this.resultSoFar;
    this.newEntry = true;

    this.dispatchEntryChange();

    this.tokens = [];
    this.dispatchOperationChange();
  }
}

export default Model;
