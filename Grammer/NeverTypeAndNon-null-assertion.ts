//never 타입과 느낌표(non-null assertion)

// never
const Arr = []; // 빈 배열을 선언하면 Arr의 타입은 never가 된다. 또한 never 타입인 배열에는 할당할 수 없다.
//Arr.push('yun') => error

// 느낌표 |

const head = document.querySelector("#head");
// head의 타입을 보면 Element | null이다.
// id가 head인 태그가 없으면 null이기 때문에 Element 또는 null이다.
// 만약 head가 null일 경우가 없다고 확실히 판단한다면 !를 사용할 수 있다.
const head2 = document.querySelector("#head")!;
// 이때 head2의 타입은 Element뿐이다.
