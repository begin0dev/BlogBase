class oauth {
  constructor() {
    this.strategires = {};
  }

  use(name, strategy) {
    if (!name) throw new Error('Authentication strategies must have a name');
    if (!strategy) throw new Error('Authentication strategies must have a strategy');

    this.strategires[name] = strategy;
    return this;
  }
}

export default oauth;
