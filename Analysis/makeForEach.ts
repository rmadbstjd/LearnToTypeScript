interface Arr {
  forEach(callback: (value: number) => void): void;
}

const numsArr: Arr = [1, 2, 3];
numsArr.forEach((value) => {
  console.log(value);
});

/*let stringsArr: Arr = ["1", "2", "3"]; // Arr의 forEach의 callback함수의 value는 number이므로 string 배열은 에러 발생
stringsArr.forEach((value) => {
  console.log(value);
});*/

//따라서

interface Arr2 {
  forEach(callback: (value: number | string) => void): void;
}

// 따라서 callback의 value를 number | string으로 지정하면 임시적으로 해결 할 수 있음
const stringsArr2: Arr2 = ["1", "2", "3"];
stringsArr2.forEach((value) => {
  console.log(value);
});

//다만 아래와 같은 상황이 발생하면 또 에러가 발생함
const stringsArr3: Arr2 = ["1", "2", "3"];
stringsArr3.forEach((value) => {
  console.log(value);
  value.charAt(3); // 분명 charAt은 string 타입에 사용할 수 있지만 number 타입에는 사용할 수 없으므로 에러가 발생
});

//따라서 이렇게 | 를 통해 타입을 정할 때 한계가 있는 경우 제네릭을 사용하여 해결할 수 있음

interface Arr3<T> {
  forEach(callback: (value: T) => void): void;
}

const stringsArr4: Arr3<String> = ["1", "2", "3"];
stringsArr4.forEach((value) => {
  console.log(value);
  value.charAt(3); // 분명 charAt은 string 타입에 사용할 수 있지만 number 타입에는 사용할 수 없으므로 에러가 발생
});
