import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [groceryList, setGroceryList] = useState([
    "apples",
    "oranges",
    "potatos",
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    setGroceryList([...groceryList, newItem]);
    console.log(newItem);

    setNewItem("");
  }

  console.log(groceryList);

  return (
    <div>
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>Add to list</button>
      </form>
      <div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
