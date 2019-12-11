import { ITestComponent } from './interfaces/test.d';

class TestComponent {
  public state = 'mogeta!';
  public count = 1000;
  //public $el = document.querySelector('html');
  public $el = null;

  // @constructs
  constructor() {}

  echo() {
    console.log(this.state);
  }
}

const t: ITestComponent = new TestComponent();
console.log(t.echo());
