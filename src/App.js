import React, { useState, useEffect  } from 'react';
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //use state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //functions and events
const FilterHandler = () => {
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}
//save to local
const saveLocalTodos = () =>  {
  localStorage.setItem('todos', JSON.stringify(todos));
};
//get locals
const getLocalTodos = () => {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  };

  



  //USE EFFECT
useEffect(()=> {
  FilterHandler();
  saveLocalTodos();
}, [todos, status]);
//only want to run once to load the local storage
useEffect(() => {
  getLocalTodos();
  console.log("hey");
}, []);

  return (
    <div className="App">
      <header>
        <h1>Neil's To Do list </h1>
      </header>
      <Form 
      todos ={todos} 
      setTodos ={setTodos} 
      setInputText={setInputText} 
      inputText ={inputText}
      setStatus ={setStatus}
      status ={status}
      />
      
      <TodoList 
      setTodos ={setTodos} 
      todos ={todos}
      filteredTodos ={filteredTodos}
      />
    </div>
  );
}


export default App;
