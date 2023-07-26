interface Array<T> {
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArgs?: any
  ): S[];
  filter(
    prediacte: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
}

const filtered = [1, 2, 3, 4, 5].filter((value) => value % 2);
//1. Array<T> => Array<number>
//2. value : T => value: number, array : T[] => array : number[]
//3. S extends number => S는 number
//4. value is S => value value is number
console.log(filtered);

const filteredString = ["1", 2, "3", 4, "5"].filter(
  (value) => typeof value === "string"
);
console.log("z", filteredString);
// ['1','3','5'] 이지만 fitlerString의 타입은 string | number로 ts가 타입 추론을 잘 못하고 있다.
//1. Array<T> => Array<string | number>
//2. S extends T => S extends string | numebr
//3. value: T => value : string | number, array : T[] => array : string | number[]
//4. S extends string | number => S는 string | number, value is S => value is string | number
//따라서 filteredString의 타입은 string | number가 된다.

//만약 filteredString의 타입을 number로 하고 싶으면
const predicate = (value: string | number): value is number =>
  typeof value === "number";

const filteredRealString = ["1", 2, "3", 4, "5"].filter(predicate);

console.log("?", filteredRealString);
