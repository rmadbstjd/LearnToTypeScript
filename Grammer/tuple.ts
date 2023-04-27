const Tuple: [string, number] = ["age", 27];

// 둘 다 똑같이 배열에 요소를 추가하지만 push는 TSC에서 못 막아준다.
// Tuple[2] = 'hello' // =>error
Tuple.push("hello"); //
console.log("Tuple:", Tuple);
