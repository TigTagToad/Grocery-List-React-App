import { useState } from "react";

export default function AddItem ({setList}) {
    const [newItem, SetNewItem] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setList((currList)=>{
            return [newItem,...currList]
        });
        SetNewItem("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">
                Add New Item:
                <input id="input" value={newItem} onChange={(event)=>SetNewItem(event.target.value)}/>
            </label>
            <button type="submit">Add Item</button>
        </form>
    );
}