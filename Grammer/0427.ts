const a: string = "5";
const b: number = 5;
const c: boolean = false;
const d: undefined = undefined;
const e: null = null;
const f: any = 123;

function add(x: number, y: number): number {
  //매개변수 x와 y의 타입은 number, 리턴 값의 타입도 numebr
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;
//=> const add2 = (x,y) => x+y; 타입을 지웠을 때에 오류가 안나는 JS 코드여야한다.
// (x: number, y:number) => number 부분이 화살표 함수의 타입이다.

// type으로 타입을 선언하는 방식을 type alias라고 한다.
type Add = (x: number, y: number) => number;
const add3: Add = (x, y) => x + y;

//const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
