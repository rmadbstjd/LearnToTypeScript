const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
//위에서부터 순서대로 0, 1, 2, 3이라는 값이 부여된다. Up = 0, Down = 1, Left = 2, Right = 3
//예시
const aE = EDirection.Up; // 0

//Up의 값을 지정해주면 그 값을 기준으로 1씩 증가한다
const enum EDirection2 {
  Up = 3,
  Down,
  Left,
  Right,
}

const aE2 = EDirection.Down; // 4

//또한 각자의 값을 불규칙하게 초기화 할 수 있다.

const enum EDirection3 {
  Up = 3,
  Down = 10,
  Left = 12,
  Right = 17,
}

//enum은 주로 변수들을 하나의 그룹으로 묶고 싶을 때 사용하지만
//개인적으로는 객체를 사용하는 것이 더 좋아보인다.
const ODirection = {
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4,
};
//enum과 일반적인 객체의 큰 차이점은 enum은 자바스크립트에서 사라지지만 객체는 자바스크립트에서 남아있다.
