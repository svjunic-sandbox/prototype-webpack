import { ITestComponent } from '~/interfaces/test';

class TestComponent {
  //public $el = document.querySelector('html');
  public $el = null;
  public state: String = 'mogeta!';
  public count: Number = 1000;

  // @constructs
  constructor() {
  }

  echo() {
    console.log(this.state);
  }
}

const t: ITestComponent = new TestComponent();
console.log(t.echo());
