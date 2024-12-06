import { useState } from "react";
import AddItem from "./AddItem";
import ResetList from "./ResetList";
import "../css/GroceryList.css";

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);
  const [checked, setChecked] = useState([]);
  const checkList = groceryList;
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
    checked.includes(item) ? "checked-item" : "not-checked-item";

  let listContent = [];
  if (checkList.length === 0) {
    listContent = <p>No items in the grocery list</p>;
  } else {
    listContent = checkList.map((item, index) => (
      <div key={index}>
        <input value={item} type="checkbox" onChange={handleCheck} />
        <span className={isChecked(item)}>{item}</span>
      </div>
    ));
  }

  return (
    <div>
      <h2>Grocery List</h2>
      <div>{listContent}</div>
      <AddItem onAddItem={addItem} />
      <ResetList onResetList={resetList} />
    </div>
  );
}
