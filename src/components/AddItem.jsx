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
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label htmlFor="item" className="form-label">
          Add Item:
        </label>
        <input
          id="item"
          type="text"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          placeholder="Enter a grocery item"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Item
      </button>
    </form>
  );
}
