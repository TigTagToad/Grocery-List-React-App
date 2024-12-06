import { use } from "react"
import AddItem from "./AddItem"
import { useState } from "react"

// export default function GroceryList({groceries}){

// return(
//     <>
   
//     <ol>
//     {
//     groceries.map((item)=>{
//         return <li key={item}>{item}</li>
//     })
//     }
//     </ol>
//     <AddItem setList={groceries} />
//     </>
// )


// }




let nextId = 0;

export default function GroceryList() {
  const [item, setItem] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  return (
    <>
    <h3>List</h3>
 

      <ul>
        {groceryList.map(grocery => (
          <li key={grocery.id}>{grocery.item}</li>
        ))}
      </ul>
      <br>
      </br>
      <label htmlFor="input">Add Item:</label>
      <br>
      </br>
      <input
        id="input"
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <button onClick={() => {
        setGroceryList([...groceryList,{
            id: nextId++,
            item: item,
        }
        ]);
      }}>Add Item</button>
    </>
  );
}
