
import { useState, userState } from "react"


function App() {

  const [count, setCount] = useState(0) //[statename, set+set_name]
  const [name, setName] = useState("Devdotcode")
  const [isChecked, setIsCheckd] = useState(false)
  const [fruits, setFruits] = useState(["Apple", "Mango", "Durian"])
  const [person, setPerson] = useState({name: "Justin", age: 21})

  const handleIncrement = () => {
    setCount(prevState  => count + 1)
  }

  const handleDecrement = () => {
    if (count <= 0) {
      alert("No you wont")
    } else {
      setCount(prevState  => count - 1)
    }
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App