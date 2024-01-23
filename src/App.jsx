import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([])

  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setTodos(data)
    })
  }, [])

  useEffect(() => {
    console.log("Count:" + count)
  }, [count])

  return (
    <>
    <button className="btn btn-primary" onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
    </>
  )
}

export default App