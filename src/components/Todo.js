import React, {useState} from 'react'
/* import TodoForm from './TodoForm'
import TodoList from './TodoList' */
import {FiEdit} from 'react-icons/fi' /* import icon */
import {FaWindowClose} from 'react-icons/fa' /* import icon */
import TodoForm from './TodoForm'
 
function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value =>{
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return todos.map((todo, index)=> (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        {/* npm install react-icons to install the icons */}
        <FaWindowClose 
          onClick={() => removeTodo(todo.id) } /* this will remove the todo */
          className='delete-icon'
          />

        <FiEdit
          onClick={() => setEdit({id: todo.id, value: todo.text}) }  /* this will edit the todo */
          className='edit-icon'
        />
      </div>

    </div>
  ))
}

export default Todo
