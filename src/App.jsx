
import { useState, userState } from "react"
import CountComponent from "./components/CountComponent"
import ChildComponent from "./components/ChildComponent"


function App() {

  const [count, setCount] = useState(0) //[statename, set+set_name]  best practice 

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
  }
  return (
    <>
      <CountComponent 
      count={count} 
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}/>

      <br />
      <hr />
      <br />

      <ChildComponent>
        <h1>This in a heading!</h1>
        <p>This is a sample paragraph.</p>
      </ChildComponent>
    </>
  )
}

export default App