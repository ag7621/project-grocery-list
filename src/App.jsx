import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setGroceryList((currentGroceryList) => {
      return [
        ...currentGroceryList,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleItem(id, completed) {
    setGroceryList((currentGroceryList) => {
      return currentGroceryList.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }

        return item;
      });
    });
  }

  function deleteItem(id) {
    setGroceryList((currentGroceryList) => {
      return currentGroceryList.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </form>
      <button className="btn">Add</button>
      <h1>Grocery List</h1>
      <ul className="list">
        {groceryList.length === 0 && "No items on grocery list"}
        {groceryList.map((item) => {
          return (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) => toggleItem(item.id, e.target.checked)}
                />
                {item.title}
              </label>
              <button onClick={() => deleteItem(item.id)} className="btn">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
