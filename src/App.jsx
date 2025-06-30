import React, { useEffect, useState } from 'react'
import supabase from '../supabase-client'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const { data, error } = await supabase.from('todos').select('*')
    if (error) {
      console.error("Error fetching todos:", error)
    } else {
      setTodoList(data)
    }
  }

  const addTodo = async () => {
    const newTodoData = {
      name: newTodo,
      is_completed: false,
    }

    const { data, error } = await supabase
      .from('todos')
      .insert([newTodoData])
      .single()

    if (error) {
      console.error("Error adding todo:", error)
    } else {
      setTodoList([...todoList, data])
      setNewTodo("")
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="New Todo.."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add To do</button>

      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
