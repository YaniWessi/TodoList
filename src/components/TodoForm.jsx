import React , { useState } from 'react'

function TodoForm({ addTodo }) {
  const [ value, setValue ] = useState("")

  const handleSubmit = async e  => {
    e.preventDefault()

   await addTodo(value)

   setValue("")
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
       type="text"
       value={value}
       className="todo-input"
       placeholder="what is the task today?"
       onChange={(e) => setValue(e.target.value)}
       />
       <button type="submite" className="todo-btn">Add Task</button>
    </form>
  )
}

export default TodoForm


// 1- We bring in useState to keep track of what the user is typing in.