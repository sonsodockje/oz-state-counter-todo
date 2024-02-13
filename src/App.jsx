import { useState } from "react";
import { useStore } from "./store/index";

function App() {
  const count = useStore((state) => state.count);
  const countUp = useStore((state) => state.up);
  const countDown = useStore((state) => state.down);
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

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
    </>
  );
}

export default App;
