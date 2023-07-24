// & 는 intersection이라 부름

type AI = number & string; //이런 조건을 만족하는 경우는 거의 없다.

//const a1: AI = '1'; error

//다만 객체에서는 사용할 수 있다.
type BI = { name: string } & { age: number };

const b2: BI = { name: "gold", age: 27 };
