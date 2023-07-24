function vA() {}

const vB = vA(); //vB의 추론 값은 void

//void는 무엇일까?
//type을 void로 지정한 함수는 리턴 값이 존재하면 안된다.
//대신 undefined는 반환가능하며, null은 안된다.
//보통 return을 작성하지 않거나 return; 으로 작성한다.
function cA(): void {
  return; //에러 발생
}

const dA = cA();

interface AHuman {
  talk(): void;
}

const human: AHuman = {
  talk() {
    return "3"; //근데 이거는 또 return값이 있어도 에러가 나지 않는다.
  },
};

//따라서 void를 3가지로 나눠서 생각하면 된다.
//1. 함수 선언문으로 작성한 함수의 타입을 void로 정한 경우, 즉 함수의 return 값이 void인 경우 (return값 있으면 안됨)
function ccA(): void {
  return; //에러 발생
}
//2. 메소드로 함수를 선언할 때 타입을 void로 정한 경우(return 값이 뭐든 신경 쓰지 않음)
const human1: AHuman = {
  talk() {
    return "3";
  },
};

//3. 콜백함수의 타입을 void로 정한 경우(return값이 뭐든 신경쓰지 않는다.)
function cccA(callback: () => void) {}

cccA(() => {
  return "3";
});

//1번은 return값이 없어야 된다는 의미이고, 2,3번은 return 값이 있어도 사용하지 않겠다는 의미이다.

//실전 예제

function forEach(arr: number[], callback: (el: number) => number): void {
  for (const el of arr) {
    console.log("el", el);
    callback(el);
  }
}

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
console.log("target", target);
