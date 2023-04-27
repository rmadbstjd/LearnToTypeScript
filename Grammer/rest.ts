function rest(...args: number[]) {
  console.log("args :", args); // args : [1, 2, 3]
}
function rest2(a: number, ...args: number[]) {
  console.log("args2 : ", a, args);
}
rest(1, 2, 3); // args: [1, 2, 3]
rest2(1, 2, 3); // args2 : 1, [2, 3]
