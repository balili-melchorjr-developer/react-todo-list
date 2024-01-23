import { useEffect, useRef, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
    console.log("Count updated")
  }, [])

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App