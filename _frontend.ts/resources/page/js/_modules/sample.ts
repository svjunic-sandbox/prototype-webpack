export default class Sample {
  mogeta: string;
  constructor() {
    this.mogeta = 'sanma!';
    console.log(this.mogeta);
  }
  get sanma(): string {
    return this.mogeta;
  }
}
