class Sample {
  static static_mogeta = 'static_mogeta!';
  private mogeta: string;

  constructor() {
    this.mogeta = 'sanma!';
    console.log('constructorの', this.mogeta);
  }

  get sanma(): string {
    console.log('mogeta');
    return this.mogeta;
  }
}

export default Sample;
