import { useState } from "react";
import { useStore } from "./store/index";

function App() {
  const count = useStore((state) => state.count);
  const countUp = useStore((state) => state.up);
  const countDown = useStore((state) => state.down);

  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  const user = useStore((state) => state.user);
  console.log(user);
  const addUserObj = useStore((state) => state.addUser);

  const [value, setValue] = useState("");

  function handleValue(e) {
    setValue(e.target.value);
  }

  function handleSubit(e) {
    e.preventDefault();
    e.target[0].value = "";
    addTodo(value);
  }

  function handleDlt(e) {
    console.log(e.target.parentElement.children[0]);
  }

  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => countUp()}>+</button>{" "}
        <button onClick={() => countDown()}>-</button>
      </div>
      <form onSubmit={handleSubit}>
        <input type="text" onChange={handleValue} />
        <button type="submit">submit</button>
      </form>
      <div>
        <ul>
          {todos.map((item, index) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <li key={index}>{item}</li>
              <button onClick={handleDlt}>x</button>
            </div>
          ))}
        </ul>
      </div>
      <div>
        {Object.keys(user).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {user[key]}
          </li>
        ))}
        {/* 값만 */}
        {Object.values(user).map((value) => (
          <li>{value}</li>
        ))}
        {/* 객체의 키는 고유한 값이 아닌데 자료형의 맵은 일단 키가 고유함을 전재로
        하는 어쩌구 ,, 객체의 값, 값만 빼올땐 좋겠다. 키가 땡땡인 것의 값만
        가져오게 어케해. */}
      </div>
    </>
  );
}

export default App;
