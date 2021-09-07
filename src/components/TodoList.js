import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
  const [todos, setTodos] = useState([]);

  /* ADDS A NEW TODO */
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

  /* REMOVES A TODO */
  const removeTodo = id =>{
    /* check if there's the todo (by id)*/
    const removeArr = [...todos].filter(todo => todo.id !== id);

    /* remove this id from the arr of todos */
    setTodos(removeArr);
  }

  /* EDITS A TODO */
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  /* COMPLETES A TODO */
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What are your plans today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />

    </div>
  )
}

export default TodoList
