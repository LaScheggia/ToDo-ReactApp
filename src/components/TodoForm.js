/* use rfce (es7 snippet to automatically create template) */
import React, {useState} from 'react'

function TodoForm(props) {
  /* I declare the useState */
  const [input, setInput] = useState('');

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    /* prevent the refresh on submit */
    e.preventDefault();

    /* gives an id on the todo you put in */
    //props.onSubmit({
      //id: Math.floor(Math.random() * 1000),
      //text: input
    //});

    /* takes the input */
    setInput('')
  
  };
  

  return (
    <div>
      {/* here i will create my todo form */}
        <form className="todo-form" onSubmit={handleSubmit}> 
          <input 
            type="text" 
            placeholder="Add a todo" 
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            />
          <button className="todo-button">
            Add ToDo
          </button>
        </form>

    </div>
  )
}

export default TodoForm

