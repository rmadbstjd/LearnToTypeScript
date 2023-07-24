// | 는 union이라 부름

/*function add(x: string | number, y: string | number): string | number {
  return x + y;
}*/

//위의 예시는 x에는 string 또는 number가 들어갈 수 있고 y에도 string 또는 number가 들어갈 수 있으므로
// 결과 값 또한 string 또는 number가 될 수 있을 것 같지만, 아래 예시의 이유로 될 수없기 때문에 에러가 난다.

//const result: string = add(1,2); 1과 2는 number이므로 결과 값이 string일 수 없음

//따라서 처음에 type을 잘 잡아놔야한다.
