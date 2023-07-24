type Animal = {
  breath: true;
};

//Animal을 상속하도록 비슷하게 작성
type Mammal = Animal & {
  breed: true;
};
// Mammal을 상속하도록 비슷하게 작성
type Human = Mammal & {
  think: true;
};
// Type Human은 breath와 breed think를 모두 만족해야함
const Yunseong: Human = {
  breath: true,
  breed: true,
  think: true,
};

// interface는 extends를 통해 확장할 수 있다.
interface AA {
  breath: true;
}

interface BB extends AA {
  breed: true;
}

const Lion: BB = { breath: true, breed: true };

// interface는 중복된 이름으로 여러 번 선언할 수 있다.
// interface는 여러 번 선언할 수 있고, 선언할 때 마다 합쳐진다.
// 대부분의 라이브러리는 type이 아닌 interface를 사용하며,
// 이를 통해 다른 사람의 interface에서 내가 원하는 것을 추가하여 확장할 수 있다.
interface CC {
  talk: () => void;
}

interface CC {
  eat: () => void;
}

interface CC {
  shit: () => void;
}

const KYS: CC = {
  talk() {},
  eat() {},
  shit() {},
};

interface AAA {
  a: string;
}

const Aobj: AAA = { a: "yun" };

//잉여 속성 검사
//AAA에 b가 없으므로 에러가 발생
const Bobj: AAA = { a: "yun", b: 27 };

//단 어떠한 변수에 담아 할당하면 에러가 발생하지 않음
const tempObj = { a: "yun", b: 27 };

const Cobj: AAA = tempObj; // { a:"yun", b:27}
