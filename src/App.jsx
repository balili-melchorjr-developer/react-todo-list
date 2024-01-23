import { useCallback, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App