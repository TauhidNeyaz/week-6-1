import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Study DSA",
      desc: "Every Day DSA 4 hour"
    },
    {
      title: "Go to Gym",
      desc: "Every Day Gym 2 hour"
    },
    {
      title: "Eat Healthy",
      desc: "Eat healthy food everyday"
    }
  ]);

  function addTodos() {
    setTodos([...todos, {
      title : "Watch Movies",
      desc : "Only one movies"
    }])
  }

  return (
    <div>
      <button onClick={addTodos}>Add Todo</button>
      {todos.map(function (todo, index) {
        return <Todo key={index} title={todo.title} desc={todo.desc} />;
      })}
    </div>
  );
}

function Todo({ title, desc }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{desc}</h4>
    </div>
  );
}

export default App;
