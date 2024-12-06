import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim()) {
      onAddItem(newItem);
      setNewItem("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Add Item: </label>
        <input
          id="item"
          type="text"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          placeholder="Enter a grocery item"
        />
        <br></br>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
