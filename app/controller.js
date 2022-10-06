class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindButtonClick(this.handleCalculatorClick);
    this.model.bindEntryChange(this.handleEntryChange);
    this.model.bindOperationChange(this.handleOperationChange);
    this.model.bindDecimal(this.handleDecimal);

    this.buttonTypeToOperations = {
      'clear-entry': this.model.clearEntry,
      clear: this.model.clear,
      negate: this.model.negate,
      digit: this.model.inputDigit,
      operator: this.model.runOperator,
      decimal: this.model.addDecimal,
      equals: this.model.getFinalResult,
    };
  }

  handleCalculatorClick = (buttonType, symbol = undefined) => {
    this.buttonTypeToOperations[buttonType].call(this.model, symbol);
  };

  handleEntryChange = (entry) => {
    this.view.setEntry(entry.toString());
  };

  handleOperationChange = (operation) => {
    this.view.setOperation(operation.join(' '));
  };

  handleDecimal = (entry) => {
    this.view.setEntry(entry.toString() + '.');
  };
}

export default Controller;
