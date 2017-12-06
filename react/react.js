const allComputeCells = [];

export class InputCell {
  constructor(v) {
    this.value = v;
    this.outputCells = [];
  }

  setValue(v) {
    this.value = v;
    this.outputCells.forEach((c) => {
      c.update();
    });
    allComputeCells.forEach((cc) => {
      cc.fireCallbacks();
    });
  }

  addOutput(cell) {
    this.outputCells.push(cell);
  }

}

export class ComputeCell {
  constructor(inputCells, f) {
    this.inputCells = inputCells;
    this.outputCells = [];
    this.callbackCells = [];
    this.f = f;
    inputCells.forEach((c) => {
      c.addOutput(this);
    });
    this.update();
    allComputeCells.push(this);
  }

  update() {
    this.value = this.f(this.inputCells);
    this.outputCells.forEach((c) => {
      c.update();
    });
  }

  fireCallbacks(){
    this.callbackCells.forEach((c) => {
      c.updateValue(this.value);
    });
  }

  addOutput(cell) {
    this.outputCells.push(cell);
  }

  addCallback(callbackCell) {
    this.callbackCells.push(callbackCell);
    callbackCell.initValue(this.value);
  }

  removeCallback(callbackCell) {
    this.callbackCells = this.callbackCells.filter(c => c !== callbackCell);
  }
}


export class CallbackCell {
  constructor(callback) {
    this.callback = callback;
    this.value = undefined;
    this.values = [];
  }

  updateValue(value) {
    if (value !== this.value) {
      this.callback(this);
      this.values.push(value);
      this.value = value;
    }
  }

  initValue(value) {
    this.value = value;
  }
}
