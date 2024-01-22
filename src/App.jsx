function App() {
  const handleClick = (name) => {
    alert(`Hello there, ${name}`)
  }
  return (
    <>
      <button onClick={() => handleClick("Justine")} className="btn btn-primary">Click Me</button>
    </>
  )
}

export default App