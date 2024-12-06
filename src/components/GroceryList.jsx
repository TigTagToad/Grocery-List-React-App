import { useState } from "react";
import AddItem from "./AddItem";
import ResetList from "./ResetList";

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);
  const [checked, setChecked] = useState([]);

  const addItem = (item) => {
    setGroceryList([...groceryList, item]);
  };

  const resetList = () => {
    setGroceryList([]);
    setChecked([]);
  };

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (item) =>
    checked.includes(item) ? "text-decoration-line-through" : "";

  return (
    <div className="mt-4">
      <h2 className="mb-3">Grocery List</h2>
      <div className="list-group">
        {groceryList.length === 0 ? (
          <p>No items in the grocery list</p>
        ) : (
          groceryList.map((item, index) => (
            <div
              key={index}
              className="list-group-item d-flex align-items-center"
            >
              <input
                value={item}
                type="checkbox"
                onChange={handleCheck}
                className="form-check-input me-2"
              />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))
        )}
      </div>
      <AddItem onAddItem={addItem} />
      <ResetList onResetList={resetList} />
    </div>
  );
}
