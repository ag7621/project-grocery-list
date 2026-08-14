import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [groceryList, setGroceryList] = useState([
    {
      name: "apples",
      id: crypto.randomUUID(),
      purchased: false,
    },
    {
      name: "oranges",
      id: crypto.randomUUID(),
      purchased: false,
    },
    {
      name: "potatoes",
      id: crypto.randomUUID(),
      purchased: false,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    setGroceryList([
      ...groceryList,
      { name: newItem, id: crypto.randomUUID(), purchased: false },
    ]);
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

      <ul>
        {groceryList.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
