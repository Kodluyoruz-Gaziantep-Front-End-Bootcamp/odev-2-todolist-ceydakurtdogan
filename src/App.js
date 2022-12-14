import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList";
function App() {
  const [inputText,setInputText]=useState ("");
  const [todos,setTodos]=useState([]);
  
  useEffect(()=>{
    const todos= localStorage.getItem("todos");
    setTodos(JSON.parse(todos));

  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  })

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
      

    </div>
  );
}

export default App;



/**
 * useEffect(()=>{
    saveLocalTodos();
  });
  useEffect(()=>{
    getLocalTodos();
  },[]);
  const saveLocalTodos=()=>{
  
      localStorage.setItem("todos",JSON.stringify(todos));
    
  };
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));

    }else{
     let todoLocal= JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  };
  
 */