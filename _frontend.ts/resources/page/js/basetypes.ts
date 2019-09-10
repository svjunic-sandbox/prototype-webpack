export default function(): void {
  const n1 = 1;

  class Mogeta {
    moge: number = 10;
  }

  class Mogeta2 {
    moge = new Mogeta();
  }

  function test(n: number): void {
    console.log(n);
  }

  function test2(n: string): void {
    console.log(n);
  }

  test(3);
  test2('3');
  console.log(n1, Mogeta, Mogeta2);
}
