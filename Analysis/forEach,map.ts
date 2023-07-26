interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
}

const numArr: Array<Number> = [1, 2, 3];
// value의 타입을 보면 알맞게 타입이 정의되어있다.
numArr.forEach((value) => {
  console.log(value);
});

["1", "2", "3"].forEach((value) => {
  console.log(value);
});

[true, false, "3"].forEach((value) => {
  console.log(value);
});
