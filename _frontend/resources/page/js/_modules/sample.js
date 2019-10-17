class Sample {
  constructor() {
    this.mogeta = 'sanma!';
    console.log('constructorの', this.mogeta);
  }

  get sanma() {
    return this.mogeta;
  }
}

export default Sample;
