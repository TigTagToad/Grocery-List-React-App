import { useState } from "react";
import AddItem from "./AddItem";

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);

  const addItem = (item) => {
    setGroceryList([...groceryList, item]);
  };

  let listContent = [];
  if (groceryList.length === 0) {
    listContent = <li>No items in the grocery list</li>;
  } else {
    listContent = groceryList.map((item) => <li key={item}>{item}</li>);
  }

  return (
    <div>
      <h2>Grocery List</h2>
      <ul>{listContent}</ul>
      <AddItem onAddItem={addItem} />
    </div>
  );
}
