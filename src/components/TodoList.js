import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo =>{
    /* /^\s*$/.test(todo.text) is a regEx  */
    /* prevents input shorter thant * number of characters  */
    /* /s = tab, space etc */
    /* * = one or more  */
    /* ^ start string */
    if(!todo.text || /^\s*$/.test(todo.text)){
      return 
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos)
    
  }

  return (
    <div>
      <h1>What are your plans today?</h1>
      <TodoForm onSubmit={addTodo}/>

    </div>
  )
}

export default TodoList
