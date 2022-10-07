class View {
  constructor() {
    this.entryWindow = document.querySelector('#entry-window');
    this.operationWindow = document.querySelector('#operation-window');
    this.buttonsContainer = document.querySelector('#buttons');
    this.clear();
  }

  // Window updates
  setEntry(entry) {
    this.entryWindow.textContent = entry;
  }

  setOperation(operation) {
    this.operationWindow.textContent = operation;
  }

  clear() {
    this.setOperation('');
    this.clearEntry();
  }

  clearEntry() {
    this.setEntry('0');
  }

  bindButtonClick(handler) {
    this.buttonsContainer.addEventListener('click', (e) => {
      const target = e.target;

      if (target instanceof HTMLButtonElement) {
        handler(target.dataset.type, target.dataset.symbol);
      }
    });
  }
}

export default View;
