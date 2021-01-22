import React, { useState, useEffect } from "react";
import List from "./List";
import Headers from "./Headers";
function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState();
  const [loading, setLoading] = useState(false)

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

const addTodo = (e) => {
  e.preventDefault();
  setTodos([...todos, {'title':newTodo, 'id' : todos.length, 'status' : 'todo'}]);
}

const changTodoStatus = (id) => {
   const updateTodos = todos.map(todo => {
     if(todo.id === +id) {
       if(todo.status === 'done') todo.status= 'todo';
       else todo.status = 'done';
     }
     return todo;
   })
   setTodos(updateTodos);
}

const fetchInitialData = async() => {
  setLoading(false)
  const response = await fetch('http://localhost:8080/todo');
  const initialData = await response.json();
  setTodos(initialData)
  setLoading(false)
}
  useEffect(()=>{
    document.title = `You clicked ${todos} times`
  }, [todos])

  useEffect ( () => {
    fetchInitialData();
  }, [])
  return(
    <div>
      <Headers todos={todos}/>
      <form action="">
        <input type="text" name="" onChange={changeInputData}/>
        <button onClick={addTodo}>할일추가</button>
      </form>
      <p>You clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>
        click me
      </button>
      <List todos={todos} loading={loading} changeTodoStatus={changTodoStatus}/>
    </div>
  ) 
}

export default App;