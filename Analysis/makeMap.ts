interface Arrs<T> {
  map(callback: (value: T) => T): T[];
}

const numssArr: Arrs<number> = [1, 2, 3];
const results = numssArr.map((value) => value + 1); //[2,3,4]
//const results1 = numssArr.map((value) => value.toString()); //이때 T는 number인데 toString을 통해 반환된 배열은 string[]이므로 에러가 발생한다.

//따라서 이러한 추가적인 경우에도 에러가 안나려면 새로운 제네릭을 사용하여 해결할 수 있다.
interface Arrrs<T> {
  map<S>(callback: (value: T) => S): S[];
}
const numsssArr: Arrrs<number> = [1, 2, 3];
const resultss = numsssArr.map((value) => value.toString()); //['1','2','3']
const isBooleanArr = numsssArr.map((value) => value % 2 === 0); //[false, true, false]

//또 추가적으로 index를 사용하고 싶으면 추가하면 된다.

interface Arrrs<T> {
  map<S>(callback: (value: T, index: number) => S): S[];
}

const isVaildIndex = numsssArr.map((value, index) =>
  console.log("v", value, "i", index)
); //v: 1 i :0, v:2 i:1, v:3 i:2
console.log(isVaildIndex);
