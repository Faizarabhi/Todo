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
const completeTask = async (id) => {
  const currentTodo = todoList.find(todo => todo.id === id)
  const { data, error } = await supabase  
    .from('todos')
    .update({ is_completed: !currentTodo.is_completed })
    .eq('id', id)

  if (error) {
    console.error("Error updating todo:", error)
  } else {
    setTodoList(todoList.map(todo =>
      todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
    ))
  }
}
const deleteTodo = async (id) => {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)  
  if (error) {
    console.error("Error deleting todo:", error)
  } else {
    setTodoList(todoList.filter(todo => todo.id !== id))
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
          <li key={todo.id}>
           <p> {todo.name} </p>
           <button onClick={() => completeTask(todo.id)}>
             {todo.is_completed ? "Undo" : "Complete"}
           </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
