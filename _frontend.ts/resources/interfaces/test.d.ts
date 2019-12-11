export interface IComponent {
  $el: HTMLElement | null;
}

export interface ITestComponent extends IComponent {
  $el: HTMLElement | null;
  state: string;
  count: number;
  echo(): void;
}
