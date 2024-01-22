
import { useState, userState } from "react"


function App() {

  const [count, setCount] = useState(0) //[statename, set+set_name]
  const [name, setName] = useState("Devdotcode")
  const [isChecked, setIsChecked] = useState(false)
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

  const handleShowFruits = () => {
    setIsChecked(!isChecked)
  }

  const handleAddFruit = () => {
    setFruits([...fruits, "Pineapple"])
  }

  const handleRemoveFruit = (fruitIndex) => {
      const filteredFruits = fruits.filter((fruit, index) => index !== fruitIndex 
    )

    setFruits(filteredFruits)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>      
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <div>
        <label>Show</label>
        <input type="checkbox" onChange={handleShowFruits} checked={isChecked} />
      </div>
      <button onClick={handleAddFruit}>Add Fruit</button>
      <ul className="list-group">
        {isChecked && fruits.map((fruit, index) => {
          return (
            <div key={index} >
              <li className="list-group-items">{fruit}</li>
              <button className="btn btn-danger" onClick={() => handleRemoveFruit(index)}>Remove Fruits</button>
            </div>
          )
        })}        
      </ul>      
    </>
  )
}

export default App