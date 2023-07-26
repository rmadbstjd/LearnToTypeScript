//타입 오버로딩이란 같은 타입을 여러 번 선언하는 것을 의미한다.
declare function addO(x: number, y: number): number;
declare function addO(x: number, y: number, z: number): number;
declare function addO(X: string, y: string): string;
addO(1, 2);
addO(1, 2, 3);
// 한 줄로 타입을 정할 수 있으면 가장 좋지만, 한 줄로는 타입을 정하기 어려울 때 오버로딩을 사용할 수 있다.
// 위의 상황에서는 옵셔널을 통해 한 줄로 가능하다
declare function addO(x: number, y: number, z?: number): number;
addO(1, 2, 3);
addO("1", "2");
