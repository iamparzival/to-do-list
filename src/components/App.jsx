import React, { useState } from "react";

function App() {
  const [todo, setToDo] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newToDo = event.target.value;
    setToDo(newToDo);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, todo];
    });
    setToDo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={todo} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
