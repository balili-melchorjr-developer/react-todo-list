import { useCallback, useState, useMemo } from "react"

function App() {
  const [count, setCount] = useState(0)

  const doubleNumber = useMemo(() => {
    console.log("Computing...")
    return count * 2
  }, [count])

  return (
    <>
      <p>Double Number: {doubleNumber}</p>      
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Double</button>
    </>
  )
}

export default App