import React from 'react';
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from './Components/firebase';
import './App.css';
import AddTodo from './Components/Todo/AddTodo';
import DisplayTodo from './Components/Todo/DisplayTodo';

function App() {
  const [todos, setTodos] = useState([])

  // getting data from complex method 

  // useEffect(() => {
  //   const q = query(collection(db, "todos"));
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     let todosArray = [];
  //     querySnapshot.forEach((doc) => {
  //       todosArray.push({ ...doc.data(), id: doc.id })
  //     })
  //     setTodos(todosArray)
  //     console.log(todosArray);
  //   })
  //   return () => unsub();
  // }, [])


// getting all doc in a collection from firebase firestore
  useEffect(() => {
    const data = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      let todosArray = []
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id })
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
      setTodos(todosArray)
      // console.log(todosArray);
    }
    return () => data();
  }, [todos])


  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title })
  }
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    })
  }
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id))
  }
  return (
    <div className='container'>
        <h1>Todo App</h1>
        <AddTodo className="addTodo"/>
      <div>
        {todos.map((todo) => (
          <DisplayTodo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
