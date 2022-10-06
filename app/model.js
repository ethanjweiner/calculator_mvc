class Model {
  constructor() {
    this.operation = [];
    this.entry = 0;
    this.result = null; // Necessary?
  }

  // Create dispatchers on changes
  bindEntryChanged(callback) {
    this.onEntryChange = callback;
  }

  bindOperationChanged() {
    this.onOperationChange = callback;
  }

  inputDigit(digit) {}

  clearEntry() {}

  clear() {}

  runOperator(operator) {}

  negate() {}

  addDecimal() {}

  getResult() {}
}

export default Model;
