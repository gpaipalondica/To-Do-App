import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {

const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handlChange = e => {
    setInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('')
}

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? <>(<input 
             className='todo-input edit'
             type='text' 
             placeholder='Add text' 
             onChange={handlChange}
             ref={inputRef}
             value={input} 
             />
             <button className='todo-button edit'>UPDATE</button>
            )</> : <>
             (<input 
            className='todo-input'
            type='text' 
            placeholder='Add text' 
            onChange={handlChange}
            ref={inputRef}
            value={input} />
            <button className='todo-button'>ADD</button>) 
            </>
        }
    </form>
  )
}

export default TodoForm