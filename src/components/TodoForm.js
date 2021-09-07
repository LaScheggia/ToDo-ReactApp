/* use rfce (es7 snippet to automatically create template) */
import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  /* I declare the useState */
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() =>{
    /* allows to focus on whatev is put as the Ref */
    inputRef.current.focus()
  })

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    /* prevent the refresh on submit */
    e.preventDefault();

    /* gives an id on the todo you put in */
    props.onSubmit({
      id: Math.floor(Math.random() * 1000), /* giving a unique ID to the todo */
      text: input
    });

    /* takes the input */
    setInput('')
  
  };
  

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your todo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update todo
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm

