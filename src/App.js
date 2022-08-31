import React, { useState } from "react"
import "./index.css"
import TodoLists from "./TodoLists.jsx";

function App(){
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    document.getElementById('input').value='';
  };  

  const deleteditem = (id) => {
    console.log("deleted")
    setItems((oldItems) => {
      return oldItems.filter((array, index) => {
        return index !== id;
      })
    })
  }
return (
  <>
  <div className="main-div">
    <div className="center-div">
      <br />
      <h1>ToDo List</h1>
      <br />
      <input id="input" type="text" placeholder="Add a Items" onChange={itemEvent} />
      <button onClick={listOfItems}> + </button>
      <br />
      <br />
      <ol>
   
        {items.map((itemval, index) =>{
          return <TodoLists text={itemval}  key={index} id={index} onSelect={deleteditem}/>;
        })}
      </ol>
    </div>
  </div>
  </>
)
}
export default App;