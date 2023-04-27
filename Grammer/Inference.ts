// 타입 추론(Inference)
// 타입 추론이란 개발자가 굳이 변수를 선언할 때 타입을 쓰지 않더라도 컴파일이 스스로 판단해서 타입을 넣어주는 것이다.
// 예를들어 다음과 같이 타입을 생략한채 변수를 선언하면 대입되는 값의 자료형태를 보고,
// 컴파일러가 num 변수는 number 타입인걸 추론해서 자동으로 넣게 되는 원리이다.
// let num = 11; 굳이 num에 대한 타입을 지정해주지 않아도 num의 타입은 number로 타입이 간주된다.
// num = 'Hello'; => error
// 타입 추론은 함수의 리턴 타입에도 쓰일 수 있다.
function addNum(x: number, y: number) {
  return x + y;
} // return 타입 명시 X
const result = addNum(1, 2); // 리턴 타입을 명시안해도 어짜피  number와 number의 합은 number이기 때문에 이정도는 tsc에서 알아서 추론한다.

// 리턴 타입이 여러개인 함수도 똑똑하게 추론한다.
function func2(value: number) {
  if (value < 10) {
    return value;
  } else {
    return `${value} is too big`;
  }
}

// 타입이 추론하는 경우는 크게 3가지로 나뉜다.
// 1. 초기화된 변수
// 2. 기본값이 설정된 매개 변수
// 3. 반환 값이 있는 함수

// 보다 타입을 명확히 써서 에러를 줄이고자 탄생한게 타입스크립트인데, 위와 같이 자바스크립트 처럼 써버리면 무슨 의미가 있겠냐는 반론이다. 하지만 프로그래머 세계에선 이는 융통성이 없는 부분이다.
// 타입스크립트의 강한 타입 규칙은 오히려 생산성을 크게 떨어뜨린다. 하지만 그렇다고 지나친 유연성은 자바스크립트와 같은 꼴이 된다.
// 바로 이 생산성과 유연성 두마리 토끼를 잡은게 컴파일의 타입 추론 기능이라고 보면 된다.
// 가장 와닿는 예시는 const 상수를 선언할 상황일 것이다.
// myName 이라는 상수를 선언한다고 하자. 다음 두가지 방식 중 어느걸 사용하는게 좋을까?

const myName2 = "yunseong";
const myName: string = "yunseong";

// myName은 상수라 값을 바꾼다거나 재선언하는 행위는 불가능하다.
// myName은 'yunseong'이라는 불변한 값의 타입을 정해놓을 수 있음에도 :string을 사용하면
// 'yunseong'이라는 더욱 정확한 타입에서 문자열이라는 보다 덜 정확한 타입을 지정하게 된다.
// 따라서 타입스크립트가 추론을 잘못했을 경우거나 any라는 타입으로 추론하는 경우에는 타입을 지정해주는 것이 효율적이다.

// 가끔 타입 추론을 멍청하게 하는 예를 들어보자.
// obj2를 상수로 선언하였지만 각 key의 타입은 readonly가 아닌 string으로 되어있다.
const obj2 = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};
obj2.red = "strawberry";
console.log("obj2.red : ", obj2.red); // obj.red :  strawberry
// 이럴 땐 타입 단언을 사용할 수 있다.
// obj3의 type을 확인하면 각 key의 타입이 readonly로 된 걸 볼 수 있다.
const obj3 = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
} as const;
//obj3.red = 'strawberry'; => error
