interface Axios {
  get(): void;
}

class CustomError {
  response?: {
    data: any;
  };
}
declare const axios: Axios;
(async () => {
  try {
    await axios.get();
  } catch (err: unknown) {
    if (err instanceof CustomError) {
      console.error("error", (err as CustomError).response?.data); //as는 타입이 unknown일 때 사용한다고 생각하면 좋다.
      err.response?.data; // 바로 위 코드에서 err as CustomError라고 정의해도 as는 일회성일뿐이라 에러가 난다.
      //따라서 err as CustomError를 변수에 할당해서 사용할 수 있다.
      const customError = err as CustomError;
      customError.response?.data;
    }
  }
})();
