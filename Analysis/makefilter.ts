interface Arrz<T> {
  filter(callback: (value: T) => boolean): T[];
}

const filteredArr: Arrz<number> = [1, 2, 3];
const isFilterArr = filteredArr.filter((value) => value % 2 === 0); //[2]

//배열에 문자열과 숫자가 섞인 경우
const stringArr: Arrz<number | string> = [1, "2", 3, "4", 5];
const isStringFilterArr = stringArr.filter(
  (value) => typeof value === "string"
); //['2','4']이므로 isStringFiltetArr의 타입은 string이여야하지만 string | numebr가 된다.

//stringArr의 타입이 number | string이지만 isStringFilterArr의 타입이 string이 되고 싶으면 새로운 제네릭을 생성해야 한다.
// is 즉, 커스텀 타입 가드를 통해 넓은 타입 string | number 에서 좁은 타입 string으로 좁혀줄 수 있다.
interface Arrz<T> {
  filter<S extends T>(callback: (value: T) => value is S): S[];
}

const stringArr2: Arrz<number | string> = [1, "2", 3, "4", 5];
const isStringFilterArr2 = stringArr.filter(
  (value): value is string => typeof value === "string"
);
