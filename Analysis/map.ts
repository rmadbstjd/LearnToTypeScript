interface Array<T> {
  // Array 타입은 뭐가 올지 모르니까 제네릭으로 정함,
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U, // 콜백 함수의 리턴은 U
    thisArg?: any
  ): U[]; //map함수의 리턴은 U[]
  thisArg?: any;
}

const strings = [1, 2, 3].map((item) => item + 1); //['1','2','3']
