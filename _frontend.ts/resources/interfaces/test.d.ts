import { IComponent } from '~/interfaces/common/component';

export interface ITestComponent extends IComponent {
  $el: HTMLElement | null;
  state: String;
  count: Number;
  echo(): void;
}
