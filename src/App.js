import React, { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
function App() {
  const [allTodos, setTodos] = useState([]);
  const [initialTitle, setTitle] = useState("");
  const [initialDescription, setDescription] = useState("");
  const handleAdd=()=>{
    let todoItems={
      title: initialTitle,
      description: initialDescription
    }
    const updatedTodoarr=[...allTodos]
    updatedTodoarr.push(todoItems)
    setTodos(updatedTodoarr)
    localStorage.setItem('todolist', JSON.stringify(updatedTodoarr))
  }
  const handleDelete=(index)=>{
    let deletedTodos=[...allTodos];
    deletedTodos.splice(index,1);
    setTodos(deletedTodos);
    localStorage.setItem('todolist', JSON.stringify(deletedTodos))
  }
  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo)
    }
  },[])
  return (
    <div className="App">
      <h1>JustDoIt</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <input value={initialTitle} onChange={(e)=>setTitle(e.target.value)} placeholder="Title of the task" />
          </div>
          <div className="todo-input-item">
            <input value={initialDescription} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter your task" />
          </div>
          <div className="todo-input-item">
            <button className="primarybtn" onClick={handleAdd}>Add</button>
          </div>
        </div>
        <div className="todolist"> 
           {allTodos.map((item,index)=>{
            return(
              <div className="todolist-item" key={index}>
              <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div>
              <AiOutlineDelete className="deletIcon" onClick={()=>handleDelete(index)} />
            </div>
            </div>
            )
           })}
          
          </div>
        </div>
      </div>
  );
}

export default App;
