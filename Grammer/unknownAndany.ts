// any를 쓰면 타입 추론을 포기해리지만
//unknown을 쓰면 타입을 직접 정의해줄 수 있다.

interface aaA {
  talk: () => void;
}

const za: aaA = {
  talk() {},
};

const zb: unknown = za.talk();
(zb as aaA).talk();

//unknown을 가장 많이 쓰는 경우는
try {
} catch (error) {
  (error as Error).message;
}
