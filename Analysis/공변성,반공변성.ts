function exFun(a: string): number {
  return +a;
}
exFun("1"); //1

type exType = (a: string) => number | string;

// exFun은 string을 받아 numebr를 리턴하는 함수이고
// exType은 string을 받아서 number 또는 string을 리턴하는 타입인데 아래는 과연 에러가 안날까?
const yun1: exType = exFun; //에러가 날 것 같지만 나지 않는다.
// 함수의 리턴 값은 더 넓은 의미로 대입이 가능하다. number보단 number | string이 더 넓은 의미

// 단 반대의 경우인 더 좁은 의미로는 대입이 불가능하다.
function exFun2(a: string): number | string {
  return +a;
}
exFun2("1"); //1

type exType2 = (a: string) => number;
const yun2: exType2 = exFun2;
// 즉! 함수의 리턴 값은 좁은 의미에서 넓은 의미로는 대입 가능하지만, 넓은 의미에서 좁은 의미로는 대입이 불가능하다.

function exFun3(a: string | number): number {
  return +a;
}

type exType3 = (a: string) => number;
const yun3: exType3 = exFun3;
