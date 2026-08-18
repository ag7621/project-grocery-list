import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [editId, setEditId] = useState(null);
  const [groceryList, setGroceryList] = useState([
    {
      name: "apples",
      id: crypto.randomUUID(),
      purchased: false,
    },
    {
      name: "oranges",
      id: crypto.randomUUID(),
      purchased: true,
    },
    {
      name: "potatoes",
      id: crypto.randomUUID(),
      purchased: false,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editId === null) {
      setGroceryList([
        ...groceryList,
        { name: newItem, id: crypto.randomUUID(), purchased: false },
      ]);
    } else {
      setGroceryList((currentGroceryList) => {
        return currentGroceryList.map((item) => {
          if (editId === item.id) {
            return { ...item, name: newItem };
          }
          return item;
        });
      });
    }

    setNewItem("");
    setEditId(null);
  }

  function handlePurchased(id, purchased) {
    setGroceryList((currentGroceryList) => {
      return currentGroceryList.map((item) => {
        if (item.id === id) {
          return { ...item, purchased };
        }
        return item;
      });
    });
  }

  function handleEdit(item) {
    setNewItem(item.name);
    setEditId(item.id);
  }

  function handleDelete(id) {
    setGroceryList((currentGroceryList) => {
      return currentGroceryList.filter((item) => item.id !== id);
    });
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
        <button>{editId ? "Save" : "Add"}</button>
      </form>

      <ul>
        {groceryList.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                textDecoration: item.purchased ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={item.purchased}
                onChange={(e) => handlePurchased(item.id, e.target.checked)}
              />
              {item.name}
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
