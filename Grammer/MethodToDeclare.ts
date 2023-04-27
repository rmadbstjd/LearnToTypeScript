function add(x: number, y: number): number {
  //매개변수 x와 y의 타입은 number, 리턴 값의 타입도 numebr
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;
//=> const add2 = (x,y) => x+y; 타입을 지웠을 때에 오류가 안나는 JS 코드여야한다.
// (x: number, y:number) => number 부분이 화살표 함수의 타입이다.

// type으로 타입을 선언하는 방식을 type alias라고 한다.
type Add3 = (x: number, y: number) => number;
const add3: Add3 = (x, y) => x + y;

// type을 선언하는 또 다른 방법이자  ts의 핵심인 interface
interface Add4 {
  (x: number, y: number): number;
}
const add4: Add4 = (x, y) => x + y;
