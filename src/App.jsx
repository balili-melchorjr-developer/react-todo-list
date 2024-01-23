import { useRef } from "react"

function App() {

  const inputRef = useRef()

  const handleGetValue = () => {
    const value = inputRef.current.value
    console.log(value)
  }



  return (
    <>
      <input ref={inputRef} type="firstName" placeholder="Enter Name..." />
      <button className="btn btn-primary" onClick={handleGetValue}>Get Value</button>
    </>
  )
}

export default App