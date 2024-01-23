import { useEffect, useRef, useState } from "react"

function App() {

  const inputRef = useRef()
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const [error, setError] = useState("")


  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    if(task) {
      setTaskList([...taskList, task])
      setTask("")
    } else {
      setError("Task must no be empty.")
      inputRef.current.focus()
    }
    
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="border p-4">
        <h1 className="text-center mb-4">Task App</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
            ref={inputRef}
            type="text" 
            className="form-control" 
            placeholder="Enter a task" 
            value={task}
            onChange={(event) => setTask(event.target.value)}/>
            {error ? <p className="text-danger mt-1">{error}</p> : null}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">Add Task</button>            
          </div>
        </form>
        <ul className="list-group mt-3">
          {taskList.map((task, index) => <li key={index} className="list-group-item">{task}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App