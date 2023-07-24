const kobj = { a: "123", b: "hello", c: "world" } as const;
//keyof는 kobj라는 객체가 있을 때 'a', 'b', 'c'라는 key 값을 꺼내오고 싶을 때 사용할 수 있다.

//type Key =  keyof kobj; //이때 kobj는 값인데 type으로 쓰려고 하려고 하여 에러가 난다.

// 따라서 값을 type으로 쓰고 싶을 때 값의 앞에 typeof을 붙이면 된다.
type Key = keyof typeof kobj; // Key에 마우스를 올려놓으면 'a' || 'b' || 'c'가 나타남.

//만약 key아닌 value를 type으로 정하고 싶으면
type Value = (typeof kobj)[keyof typeof kobj]; // Key에 마우스를 올려놓으면 '123' || 'hello' || '123'가 나타남.
