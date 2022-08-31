import React from "react"
import "./index.css"

const TodoLists = (props) => {
    return(
        <>
        <div className="todo-list">
            <button onClick={() => {
                props.onSelect(props.id)
            }}>X</button>
         <li>{props.text}</li>
         </div>
        </>

    )
}
export default TodoLists; 

