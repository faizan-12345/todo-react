import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

function DisplayTodo({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    e.preventDefault()
    if (todo.complete === true) {
      setNewTitle(todo.title)
    } else {
      todo.title = "";
      setNewTitle(e.target.value)
    }

    //  console.log(todo);
  }
  return (
    <div className="display">
      <input
        type="text"
        style={{ textDecoration: todo.completed && "line-through" }}
        // value={todo.title === "" ? newTitle:todo.title} 
        value={newTitle}
        onChange={handleChange}
      />
      <div className="todos">

        < CloudDoneIcon className="icons" onClick={() => toggleComplete(todo)} />

        < EditIcon className="icons edit" onClick={() => handleEdit(todo, newTitle)} />

        < DeleteIcon className="icons delete" onClick={() => handleDelete(todo.id)}/>


      </div>

    </div>
  )
}

export default DisplayTodo