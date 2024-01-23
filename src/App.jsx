import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Count updated")
  }, [])

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App