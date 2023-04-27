type Job = "Student" | "Doctor";
const a3: Job = "Student";
const b3 = `hello ${a3}`;
type Greeting = `hello ${Job}`;
const c3: Greeting = "hello Doctor"; //type을  Job에서 미리 지정해서 추천해줄 때 사용함.
