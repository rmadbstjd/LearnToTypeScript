// string 타입과 String 타입은 엄연히 다른 타입이다. 가능한 경우 string을 사용하는 것이 좋다.
const aa: string = "hello";
const bb: String = "hell";

function cc(a: string, b: string) {
  return a + b;
}
//cc(aa,bb); => error
