//기본적인 타입
const a: string = "5";
const b: number = 5;
const c: boolean = false;
const d: undefined = undefined;
const e: null = null;
const f: any = 123;
const g: 5 = 5; // 6을 넣으면 에러가 남, const로 선언할 경우 바뀔 일이 없기 때문에 최대한 정확하게 적기 위해 사용함.

//배열
const arr: string[] = ["lat", "lon"]; //일반적인 방식
const arr2: Array<number> = [37.5, 127.5]; // <> 제네릭 형식
const arr3: [number, number, string] = [27, 97, "yunseong"]; //튜플 형식, 길이의 고정하여 제한함.

//객체
const obj: { age: number; name: string } = { age: 27, name: "yunseong" };
