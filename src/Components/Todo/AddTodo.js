import React from "react";
import { db } from "../firebase";
import { collection,addDoc } from "firebase/firestore";
import { useState } from "react";


function AddTodo() {
const [title,setTitle] = useState(""); 
const handleSubmit =async (e) => {
    e.preventDefault()
  if(title !== ""){
        await addDoc(collection(db,"todos"),{
            title,
            completed:false
        })
    setTitle("");
  }
}
return(
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter todo..." value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button>Add</button>
    </form>
)
}
export default AddTodo