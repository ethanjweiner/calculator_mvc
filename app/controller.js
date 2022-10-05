class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindButtonClick(this.handleCalculatorClick);
  }

  handleCalculatorClick = (type, symbol) => {
    this.model.input(type, symbol);
  };
}

export default Controller;
